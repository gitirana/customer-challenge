import { UserRoundPlus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CustomerRegistration } from './customer-registration'

export function CustomersHeader() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  
  return (
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
  )
}
