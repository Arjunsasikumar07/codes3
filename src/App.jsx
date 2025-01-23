import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Regform from './components/Regform'
import Navbar from './components/Navbar'
import { Table } from '@mui/material'
import Ctable from './components/Ctable'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<First/>}/>
      <Route path="/r"element={<Regform/>}/>
      <Route path="/c"element={<Ctable/>}/>
      <Route path="/g"element={<Statebasics/>}/>
      <Route path="/a"element={<Task/>}/> 
      </Routes>
      </>
  )
}

export default App
