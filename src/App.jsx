import React, {useState} from 'react'
import styles from './style'
// import Hero from './Components/Hero'
import "./App.css"
import './index.css'


import Heroo from './Components/Heroo'

// Set-ExecutionPolicy RemoteSigned -Scope Process



const App = () => {
  
  return (
    <div className="bgImg rounded-[5px] h-[100vh] my-0 mx-auto max-w-[600px] sm:max-w-[1100px] overflow-hidden">
      {/* <Hero /> */}
      <Heroo />
     
    </div>
  )
}

export default App





