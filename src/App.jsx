import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './nav/Nav.jsx';

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Nav cart={cart}/>
      <Outlet context={[cart, setCart]}/>
    </>
  )
}

export default App
