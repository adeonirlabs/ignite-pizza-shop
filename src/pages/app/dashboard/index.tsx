import { Helmet } from 'react-helmet-async'

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <section className="grid grid-cols-4 gap-4">{/* ... */}</section>
    </>
  )
}
