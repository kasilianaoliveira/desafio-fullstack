import { Helmet } from 'react-helmet-async'

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
                {Array.from({ length: 10 }).map((_, i) => {
                  return <SchoolTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>
          <PaginationTable pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
