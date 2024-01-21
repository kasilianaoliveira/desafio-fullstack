import { Search } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { SchoolDetails } from './school-details'
import { SchoolProps } from './SchoolType'

export const SchoolTableRow = (props: SchoolProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes da escola</span>
            </Button>
          </DialogTrigger>
          <SchoolDetails
            schoolId={props.school.id_escola}
            open={isDetailsOpen}
          />
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
