import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface props {
  schools: {
    sg_uf: string
    value: number
  }[]
}
export const RevenueChart = ({ schools }: props) => {
  return (
    <Card className="col-span-9 bg-gray-300 dark:border-gray-700 dark:bg-gray-900">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Total de Escolas por Estado
          </CardTitle>
          <CardDescription>
            Número total de escolas que participaram, organizadas por estado.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart
            width={500}
            height={300}
            style={{ fontSize: 12 }}
            data={schools}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="uf"
              scale="point"
              dy={16}
              padding={{ left: 20, right: 10 }}
            />
            <YAxis />
            <Tooltip contentStyle={{ color: '#000' }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="value"
              fill={colors.teal['700']}
              background={{ fill: '#eee' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
