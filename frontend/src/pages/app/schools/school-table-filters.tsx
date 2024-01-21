import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown, Search, X } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const schoolFilterSchema = z.object({
  schoolId: z.string().optional(),
  search: z.string().optional(),
  city: z.string().optional(),
  uf: z.string().optional(),
})

interface tableFiltersProps {
  cities?: string[]
  ufs?: string[]
}
type SchoolFiltersSchema = z.infer<typeof schoolFilterSchema>

export const SchoolTableFilters = ({ cities, ufs }: tableFiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [open, setOpen] = React.useState(false)

  const search = searchParams.get('search')

  const city = searchParams.get('city')
  const uf = searchParams.get('uf')

  const { register, handleSubmit, control } = useForm<SchoolFiltersSchema>({
    resolver: zodResolver(schoolFilterSchema),
    defaultValues: {
      search: search ?? '',
      city: city ?? '',
      uf: uf ?? '',
    },
  })

  function handleFilter({ city, search, uf }: SchoolFiltersSchema) {
    setSearchParams((state) => {
      if (search) {
        state.set('search', search)
      } else {
        state.delete('search')
      }
      if (city) {
        state.set('city', city)
      } else {
        state.delete('city')
      }

      if (uf) {
        state.set('uf', uf)
      } else {
        state.delete('uf')
      }

      state.set('page', '1')

      return state
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2 max-sm:flex-col max-sm:items-start"
    >
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        placeholder="Nome da escola"
        className="h-8 w-[320px] max-sm:w-full"
        {...register('search')}
      />
      <Input
        placeholder="Nome da cidade"
        className="h-8 w-[320px] max-sm:w-full"
        {...register('city')}
      />
      <Controller
        name="uf"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="h-8 w-[200px] justify-between max-sm:w-full"
                >
                  {value
                    ? ufs?.find(
                        (uf) => uf.toUpperCase() === value.toUpperCase(),
                      )
                    : 'Selecione seu estado'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder={'Pesquise seu estado...'} />
                  <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
                  <CommandGroup>
                    {ufs &&
                      ufs.map((uf) => (
                        <CommandItem
                          key={uf}
                          value={uf}
                          onSelect={(currentValue) => {
                            onChange(currentValue === value ? '' : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value?.toUpperCase() === uf.toUpperCase()
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {uf}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          )
        }}
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
