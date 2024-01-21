import { Activity } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CardStudentTotal = ({ total }: { total: number | undefined }) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Quantidade de alunos total (INSE)
        </CardTitle>
        <Activity className="h-5 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter text-teal-700 dark:text-teal-500">
          {total}
        </span>
      </CardContent>
    </Card>
  )
}
