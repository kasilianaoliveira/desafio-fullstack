import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getSchools } from '@/api/get-schools'
import { PaginationTable } from '@/components/paginationTable'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { SchoolTableFilters } from './school-table-filters'
import { SchoolTableRow } from './school-table-row'

export const Schools = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')
  const city = searchParams.get('city')
  const uf = searchParams.get('uf')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const {
    data: result,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['schools', pageIndex],
    queryFn: () => getSchools({ pageIndex, city, search, uf }),
  })

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (isError) {
    return <p>Erro ao buscar escolas.</p>
  }

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())
      return state
    })
  }
  return (
    <>
      <Helmet title="INSE - Resultados" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">
          INSE - Resultados
        </h1>

        <div className="space-y-2.5">
          <SchoolTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[64px]">Identificador</TableHead>
                  <TableHead>Nome da escola</TableHead>
                  <TableHead className="w-[160px]">Estado</TableHead>
                  <TableHead className="w-[160px]">Cidade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.schools.map((school) => {
                    return (
                      <SchoolTableRow key={school.id_escola} school={school} />
                    )
                  })}
              </TableBody>
            </Table>
          </div>
          <PaginationTable
            pageIndex={pageIndex}
            totalCount={result ? result.totalItems : 0}
            perPage={10}
            onPageChange={handlePaginate}
          />
        </div>
      </div>
    </>
  )
}
