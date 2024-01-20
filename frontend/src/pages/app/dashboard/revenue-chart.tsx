import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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

const data = [
  {
    uf: 'CE',
    value: 1200,
  },
  {
    uf: 'DF',
    value: 1200,
  },
  {
    uf: 'AM',
    value: 1200,
  },
  {
    uf: 'RN',
    value: 1200,
  },
  {
    uf: 'RJ',
    value: 1200,
  },
  {
    uf: 'SP',
    value: 3000,
  },
  {
    uf: 'MG',
    value: 900,
  },
]
export const RevenueChart = () => {
  return (
    <Card className="col-span-9">
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
            data={data}
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
            <Tooltip />
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
