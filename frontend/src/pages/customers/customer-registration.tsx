import { Save } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

// export interface CustomerDetailsProps {
//   open: boolean
// }

export function CustomerRegistration() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um cliente</DialogTitle>
        <DialogDescription>Cadastro de um novo cliente</DialogDescription>
      </DialogHeader>

      <form className="space-y-6">
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">Nome</span>
          <Input />
        </section>
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">E-mail</span>
          <Input />
        </section>
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">Telefone</span>
          <Input />
        </section>

        <DialogFooter>
          <Button type="submit" className="gap-2">
            <Save className="h-4 w-4" />
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
