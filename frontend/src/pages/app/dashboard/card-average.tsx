import { NotebookPen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CardAverange = ({ avg }: { avg: number | undefined }) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Média geral (INSE)
        </CardTitle>
        <NotebookPen className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter text-teal-700 dark:text-teal-500">
          {avg}
        </span>
      </CardContent>
    </Card>
  )
}
