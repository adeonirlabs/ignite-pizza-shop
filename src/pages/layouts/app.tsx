import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '~/components/header'
import { api } from '~/lib/axios'

export const AppLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const id = api.interceptors.response.use(
      (res) => res,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data?.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(id)
    }
  }, [navigate])

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-6">
        <Outlet />
      </main>
    </>
  )
}
