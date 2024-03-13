import { setupWorker } from 'msw/browser'

import { signIn } from '~/api/sign-in/mock'
import { env } from '~/env'

export const worker = setupWorker(signIn)

export async function startMsw() {
  if (env.MODE !== 'test') return

  await worker.start()
}
