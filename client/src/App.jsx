import React, { useEffect, useState } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import logger from './utils/logger.js'
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
    {
      index: true,
      element: <Home />
    }
    ]
  }
])
function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App

