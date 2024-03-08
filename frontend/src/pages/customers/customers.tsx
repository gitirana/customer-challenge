import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getCustomers } from '@/api/get-customers'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CustomerTableFilters } from './customer-table-filters'
import { CustomerTableRow } from './customer-table-row'
import { CustomersHeader } from './customers-header'

export function Customers() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const name = searchParams.get('name')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')

  const page = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['customers', page, id, name, email, phone],
    queryFn: () =>
      getCustomers({
        id,
        email,
        name,
        page,
        phone,
      }),
  })

function handlePaginate(pageIndex: number) {
  setSearchParams((prev) => {
    prev.set('page', (pageIndex + 1).toString())

    return prev
  })
}

  return (
    <>
      <Helmet title="Customers" />

      <div className="flex flex-col gap-4">
        <CustomersHeader />

        <main className="space-y-2.5">
          <CustomerTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[20px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Criado há</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Telefone</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {result &&
                  result.customers.map((customer, index) => {
                    return <CustomerTableRow key={index} customer={customer} />
                  })}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.page}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </main>
      </div>
    </>
  )
}
