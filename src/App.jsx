import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommendend from './Recommendend/Recommendend'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommendend/>
      <Products/>
    </>
  )
}

export default App
