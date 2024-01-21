import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function SchoolTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only"> Detalhes da escola</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[172px]  max-sm:w-[50px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[600px] max-lg:w-[300px] max-sm:w-[50px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[110px] max-sm:w-[50px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[110px] max-sm:w-[50px]" />
        </TableCell>
      </TableRow>
    )
  })
}
