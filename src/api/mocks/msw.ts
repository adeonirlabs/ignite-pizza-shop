import { setupWorker } from 'msw/browser'

import { env } from '~/env'

import { me } from '../me/mock'
import { dayOrders, dayRevenue, monthCanceledOrders, monthOrders, monthRevenue, popularProducts } from '../metrics/mock'
import { signIn } from '../sign-in/mock'
import { signUp } from '../sign-up/mock'

export const worker = setupWorker(
  dayOrders,
  dayRevenue,
  me,
  monthCanceledOrders,
  monthOrders,
  monthRevenue,
  popularProducts,
  signIn,
  signUp,
)

export async function startMsw() {
  if (env.MODE !== 'test') return

  await worker.start()
}
