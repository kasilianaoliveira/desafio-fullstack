import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Combobox } from './combobox'

const schoolFilterSchema = z.object({
  schoolId: z.string().optional(),
  search: z.string().optional(),
  city: z.string().optional(),
  uf: z.string().optional(),
})

type SchoolFiltersSchema = z.infer<typeof schoolFilterSchema>

export const SchoolTableFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

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
      <Controller
        name="city"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Combobox
              value={value}
              disabled={disabled}
              onChange={onChange}
              name={name}
              title="Selecione seu Estado"
              subtitle="Pesquise seu estado..."
            />
          )
        }}
      ></Controller>
      <Controller
        name="city"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Combobox
              value={value}
              disabled={disabled}
              onChange={onChange}
              name={name}
              // cities={scho}
              title="Selecione sua Cidade"
              subtitle="Pesquise seu cidade..."
            />
          )
        }}
      ></Controller>

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
