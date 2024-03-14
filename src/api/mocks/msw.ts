import { setupWorker } from 'msw/browser'

import { env } from '~/env'

import { userProfile } from '../me/mock'
import { dayOrders, dayRevenue, monthCanceledOrders, monthOrders, monthRevenue, popularProducts } from '../metrics/mock'
import { orderDetails, ordersList } from '../orders/mock'
import { restaurant, restaurantProfile } from '../restaurant/mock'
import { signIn } from '../sign-in/mock'
import { signUp } from '../sign-up/mock'

export const worker = setupWorker(
  dayOrders,
  dayRevenue,
  monthCanceledOrders,
  monthOrders,
  monthRevenue,
  orderDetails,
  ordersList,
  popularProducts,
  restaurant,
  restaurantProfile,
  signIn,
  signUp,
  userProfile,
)

export async function startMsw() {
  if (env.MODE !== 'test') return

  await worker.start()
}
