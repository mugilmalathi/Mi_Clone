import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Router } from './components/Routers/Router'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
