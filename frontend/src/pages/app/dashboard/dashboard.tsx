import { Helmet } from 'react-helmet-async'

import { CardAverange } from './card-average'
import { CardClassification } from './card-classification'
import { CardStudentTotal } from './card-student-total'
import { RevenueChart } from './revenue-chart'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <CardAverange />
          <CardStudentTotal />
          <CardClassification />
        </div>
        <div className=" mt-6 grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
