import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
// import LatestNewsProvider from './Contexts/Latest News Context/LatestNewsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <LatestNewsProvider> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </LatestNewsProvider> */}
    </AuthProvider>
    <Toaster></Toaster>
  </StrictMode>,
)
