import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Layout from './Component/Layout/Index'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
          </Route>
      </Routes>
   </BrowserRouter>
    </>
  )
}

export default App