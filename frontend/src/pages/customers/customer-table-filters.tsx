import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'

const customerFiltersSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
})

type CustomerFiltersSchema = z.infer<typeof customerFiltersSchema>

export function CustomerTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const name = searchParams.get('name')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')
  
  const { register, handleSubmit, reset } =
    useForm<CustomerFiltersSchema>({
      resolver: zodResolver(customerFiltersSchema),
      defaultValues: {
        id: id ?? '',
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? '',
      },
    })

  function handleFilter({ email,id,name,phone }: CustomerFiltersSchema) {
    setSearchParams((state) => {
      if (id) {
        state.set('id', id)
      } else {
        state.delete('id')
      }

      if (email) {
        state.set('email', email)
      } else {
        state.delete('email')
      }

      if (name) {
        state.set('name', name)
      } else {
        state.delete('name')
      }

      if (phone) {
        state.set('phone', phone)
      } else {
        state.delete('phone')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('id')
      state.delete('name')
      state.delete('email')
      state.delete('phone')
      state.set('page', '1')

      return state
    })

    reset({
      id: '',
      name: '',
      email: '',
      phone: '',
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFilter)} className="flex items-center gap-2" action="">
      <span className="text-sm font-semibold">Filtros:</span>

      <Input placeholder="ID do cliente" {...register('id')}  className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" {...register('name')} className="h-8 w-[320px]" />
      <Input placeholder="E-mail do cliente" {...register('email')} className="h-8 w-[320px]" />
      <Input placeholder="Telefone do cliente" {...register('phone')} className="h-8 w-[200px]" />

      <Button type="submit" variant={'secondary'} size={'xs'}>
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" onClick={handleClearFilters} variant={'outline'} size={'xs'}>
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
