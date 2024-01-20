import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}
export const PaginationTable = ({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span>Total de {totalCount} item(s)</span>
      <Pagination>
        <PaginationContent>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Página {pageIndex + 1} de {pages}
            </div>

            <div className="flex items-center space-x-2">
              <PaginationLink className="h-8 w-8 p-0">
                <ChevronsLeft />
                <span className="sr-only">Primeira página</span>
              </PaginationLink>
              <PaginationPrevious className="h-8 w-8 p-0" />
              <PaginationNext className="h-8 w-8 p-0" />
              <PaginationLink className="h-8 w-8 p-0">
                <ChevronsRight />
                <span className="sr-only">Última página</span>
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
