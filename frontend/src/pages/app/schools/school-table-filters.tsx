import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Combobox } from '@/components/ui/combobox'
import { Input } from '@/components/ui/input'

export const SchoolTableFilters = () => {
  return (
    <form className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        placeholder="Nome da escola"
        className="h-8 w-[320px] max-sm:w-full"
      />
      <Combobox
        title="Selecione seu Estado"
        subtitle="Pesquise seu estado..."
      />
      <Combobox
        title="Selecione sua Cidade"
        subtitle="Pesquise seu estado..."
      />
      <Button type="submit" size="xs" className="max-sm:w-full">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className="max-sm:w-full"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
