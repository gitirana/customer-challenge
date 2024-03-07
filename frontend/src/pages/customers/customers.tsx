import { UserRoundPlus } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { CustomerRegistration } from './customer-registration'
import { CustomerTableFilters } from './customer-table-filters'
import { CustomerTableRow } from './customer-table-row'

export function Customers() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <>
      <Helmet title="Customers" />

      <div className="flex flex-col gap-4">
        <header className="flex justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <UserRoundPlus className="h-4 w-4" />
                Novo cliente
              </Button>
            </DialogTrigger>

            <CustomerRegistration />
          </Dialog>
        </header>

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
                {Array.from({ length: 10 }).map((_, index) => {
                  return <CustomerTableRow key={index} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </main>
      </div>
    </>
  )
}
