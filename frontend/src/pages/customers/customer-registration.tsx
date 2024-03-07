import { useMutation } from '@tanstack/react-query'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerCustomer } from '@/api/register-customer'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const customerRegistrationForm = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type CustomerRegistrationForm = z.infer<typeof customerRegistrationForm>

export function CustomerRegistration() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CustomerRegistrationForm>()

  const { mutateAsync: registerCustomerFn } = useMutation({
    mutationFn: registerCustomer,
  })

  async function handleRegisterCustomer(data: CustomerRegistrationForm) {
    try {
      await registerCustomerFn({
        name: data.name,
        email: data.email,
        phone: data.phone,
      })

      toast.success('Cliente cadastrado com sucesso.')
    } catch {
      toast.error('Erro ao cadastrar cliente.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicione um cliente</DialogTitle>
        <DialogDescription>Cadastro de um novo cliente</DialogDescription>
      </DialogHeader>

      <form
        className="space-y-6"
        onSubmit={handleSubmit(handleRegisterCustomer)}
      >
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">Nome</span>
          <Input id="name" type="text" {...register('name')} />
        </section>
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">E-mail</span>
          <Input id="email" type="email" {...register('email')} />
        </section>
        <section className="flex items-center justify-between gap-4">
          <span className="w-24">Telefone</span>
          <Input id="phone" type="phone" {...register('phone')} />
        </section>

        <DialogFooter>
          <Button disabled={isSubmitting} type="submit" className="gap-2">
            <Save className="h-4 w-4" />
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
