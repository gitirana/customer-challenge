import { Search } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { CustomerDetails } from './customer-details'

// export interface CustomerTableRowProps {}

export function CustomerTableRow() {
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

          <CustomerDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        3029701473740127430sf
      </TableCell>
      <TableCell className="text-muted-foreground">há 15min</TableCell>
      <TableCell className="font-medium">
        Thayná Luiza Gitirana da Cunha
      </TableCell>
      <TableCell className="font-medium">thayna@email.com</TableCell>
      <TableCell className="font-medium">(81) 98843-6241</TableCell>
    </TableRow>
  )
}
