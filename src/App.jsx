// import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import {Route,Routes} from 'react-router-dom'
import ServicesInfo from './views/ServicesInfo/ServicesInfo'
import {useRef} from 'react'

function App() {

  const resultRef = useRef(null);

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Services' element={<ServicesInfo />}></Route>
    </Routes>
    
      
    </>
  )
}

export default App
