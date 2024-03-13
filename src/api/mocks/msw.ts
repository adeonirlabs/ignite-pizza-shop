import { setupWorker } from 'msw/browser'

import { env } from '~/env'

import { signIn } from '../sign-in/mock'
import { signUp } from '../sign-up/mock'

export const worker = setupWorker(signIn, signUp)

export async function startMsw() {
  if (env.MODE !== 'test') return

  await worker.start()
}
