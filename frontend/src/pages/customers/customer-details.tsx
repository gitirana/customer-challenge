import { Customer } from '@/api/get-customers'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface CustomerDetailsProps {
  open: boolean
  customer: Customer
}

export function CustomerDetails({customer}: CustomerDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cliente: {customer.id}</DialogTitle>
        <DialogDescription>Detalhes do cliente</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                {customer.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                {customer.phone}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                {customer.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Criado há</TableCell>
              <TableCell className="flex justify-end">{formatDistanceToNow(customer.created_at, {
                locale: ptBR,
                addSuffix: true,
              })}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
