import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { SchoolDetails } from './school-details'
import { SchoolProps } from './SchoolType'

export const SchoolTableRow = (props: SchoolProps) => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <SchoolDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {props.school.id_escola}
      </TableCell>
      <TableCell className="font-medium">{props.school.no_escola}</TableCell>
      <TableCell className="font-medium">{props.school.no_uf}</TableCell>
      <TableCell className="font-medium">{props.school.no_municipio}</TableCell>
    </TableRow>
  )
}
