import { Helmet } from 'react-helmet-async'

import { CancelledByMonthCard } from './components/canceled-by-month-card'
import { OrdersByDayCard } from './components/orders-by-day-card'
import { OrdersByMonthCard } from './components/orders-by-month-card'
import { PopularProductsChart } from './components/propular-products-chart'
import { RevenueCard } from './components/revenue-card'
import { RevenueChart } from './components/revenue-chart'

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
      <section className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </section>
    </>
  )
}
