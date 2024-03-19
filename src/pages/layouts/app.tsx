import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useSignOutMutation } from '~/api/sign-out'
import { Header } from '~/components/header'
import { api } from '~/lib/axios'

export const AppLayout = () => {
  const navigate = useNavigate()
  const { mutateAsync: signOut } = useSignOutMutation()

  useEffect(() => {
    const id = api.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data?.code

          if (status === 401 || code === 'UNAUTHORIZED') {
            await signOut().then(() => {
              navigate('/sign-in', { replace: true })
            })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(id)
    }
  }, [navigate, signOut])

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-6">
        <Outlet />
      </main>
    </>
  )
}
