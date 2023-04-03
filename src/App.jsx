import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Pricelist from './Pricelist/Pricelist'
import Dashboard from './dashboard/Dashboard'
import Phonebar from './phonebar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">
      Hello world!
    </h1>
    <Pricelist></Pricelist>
    <Dashboard></Dashboard>
    <Phonebar></Phonebar>
    </div>
  )
}

export default App
