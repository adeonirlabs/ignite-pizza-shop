import React from 'react'
import ReactDOM from 'react-dom/client'

import { startMsw } from '~/api/mocks/msw.ts'

import { App } from './app.tsx'

startMsw().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
