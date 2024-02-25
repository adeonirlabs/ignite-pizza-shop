import { Helmet } from 'react-helmet-async'

import { CancelledByMonthCard } from './components/canceled-by-month-card'
import { OrdersByDayCard } from './components/orders-by-day-card'
import { OrdersByMonthCard } from './components/orders-by-month-card'
import { RevenueCard } from './components/renevue-card'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <section className="grid grid-cols-4 gap-4">
        <RevenueCard />
        <OrdersByMonthCard />
        <OrdersByDayCard />
        <CancelledByMonthCard />
      </section>
    </>
  )
}
