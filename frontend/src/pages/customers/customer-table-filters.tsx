import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CustomerTableFilters() {
  return (
    <form className="flex items-center gap-2" action="">
      <span className="text-sm font-semibold">Filtros:</span>

      <Input placeholder="ID do cliente" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Input placeholder="E-mail do cliente" className="h-8 w-[320px]" />
      <Input placeholder="Telefone do cliente" className="h-8 w-[200px]" />

      <Button type="submit" variant={'secondary'} size={'xs'}>
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant={'outline'} size={'xs'}>
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
