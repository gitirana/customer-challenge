import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Search } from 'lucide-react'
import { useState } from 'react'

import { Customer } from '@/api/get-customers'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { CustomerDetails } from './customer-details'

export interface CustomerTableRowProps {
  customer: Customer
}

export function CustomerTableRow({ customer }: CustomerTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'xs'}>
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do cliente</span>
            </Button>
          </DialogTrigger>

          <CustomerDetails customer={customer} open={true} />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {customer.id}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(customer.created_at, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell className="font-medium">{customer.name}</TableCell>
      <TableCell className="font-medium">{customer.email}</TableCell>
      <TableCell className="font-medium">{customer.phone}</TableCell>
    </TableRow>
  )
}
