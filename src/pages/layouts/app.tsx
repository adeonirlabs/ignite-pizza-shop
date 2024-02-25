import { Outlet } from 'react-router-dom'

import { Header } from '~/components/header'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-6">
        <Outlet />
      </main>
    </>
  )
}
