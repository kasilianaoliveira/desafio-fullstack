import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getSchoolsDashboard } from '@/api/get-schools-dashboard'

import { CardAverange } from './card-average'
import { CardClassification } from './card-classification'
import { CardStudentTotal } from './card-student-total'
import { RevenueChart } from './revenue-chart'

export const Dashboard = () => {
  const {
    data: result,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['schools'],
    queryFn: () => getSchoolsDashboard(),
  })
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        {result && (
          <>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              <CardAverange avg={result && result?.roundedAverage} />
              <CardStudentTotal
                total={result && result?.totalStudents._sum.qtd_alunos_inse}
              />
              <CardClassification
                classification={result && result?.mostFrequentClassification}
              />
            </div>
            <div className=" mt-6 grid grid-cols-9 gap-4">
              <RevenueChart schools={result!.schools} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
