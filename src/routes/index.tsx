import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from '~/pages/auth/sign-in'
import { Dashboard } from '~/pages/dashboard'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
])
