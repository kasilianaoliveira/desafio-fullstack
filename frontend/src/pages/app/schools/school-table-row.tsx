import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { SchoolDetails } from './school-details'
export const SchoolTableRow = () => {
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
      <TableCell className="font-mono text-sm font-medium">12344556</TableCell>
      <TableCell className="font-medium">
        EEEP DR JOSÉ ALVES DA SILVEIRA
      </TableCell>
      <TableCell className="font-medium">Ceará</TableCell>
      <TableCell className="font-medium">Quixeramobim</TableCell>
    </TableRow>
  )
}
