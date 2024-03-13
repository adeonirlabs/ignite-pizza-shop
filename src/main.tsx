import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app.tsx'
import { startMsw } from './lib/msw.ts'

startMsw().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
