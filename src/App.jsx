import { useState } from 'react'
import './App.css'
import Footer from './Component/Footer'

import MainCtn from './Component/MainCtn'
import Navbar from './Component/Navbar'

function App() {
  

  return (
    <div className="App">
     <Navbar/>
     <MainCtn/>
     <Footer/>
    </div>
  )
}

export default App
