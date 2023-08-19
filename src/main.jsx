import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './context/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

// console.log(import.meta.env)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div >
        <RouterProvider router={router}>
          <App />
          <Toaster />
        </RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
