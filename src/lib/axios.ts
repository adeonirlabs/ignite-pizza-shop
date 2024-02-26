import axios from 'axios'

import { env } from '~/env'

import { sleep } from './utils'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.DEV) {
  api.interceptors.response.use(async (config) => {
    await sleep(500)

    return config
  })
}
