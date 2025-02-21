import { useState } from 'react'
import { RouterProvider } from 'react-router'
import router from './layouts/router'

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
