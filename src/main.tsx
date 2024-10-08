import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { StateContext } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StateContext>
      <RouterProvider router={router} />
    </StateContext>
  </React.StrictMode>,
)
