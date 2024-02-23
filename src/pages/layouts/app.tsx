import { Outlet } from 'react-router-dom'

import { Header } from '~/components/header'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}
