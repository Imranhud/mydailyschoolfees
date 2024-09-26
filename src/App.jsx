import React, {useState} from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import Heroo from './Components/Heroo'
import BalanceC from './Components/BalanceC'

// Set-ExecutionPolicy RemoteSigned -Scope Process



const App = () => {
  
  return (
    <div className="bgImg object-contain h-[100vh] my-0 mx-auto max-w-[600px] sm:max-w-[1100px] overflow-hidden">
      <NavBar />
      <BalanceC />
      <Heroo />
     
    </div>
  )
}

export default App





