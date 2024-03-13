import axios from 'axios'

import { env } from '~/env'

import { sleep } from './utils'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.MODE === 'development') {
  api.interceptors.response.use(async (config) => {
    // Simulate a random delay
    await sleep(Math.round(Math.random() * 2000))

    return config
  })
}
