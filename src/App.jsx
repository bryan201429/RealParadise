// import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/NavBar/NavBar'
import {Route,Routes} from 'react-router-dom'
import ServicesInfo from './views/ServicesInfo/ServicesInfo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Services' element={<ServicesInfo/>}></Route>
    </Routes>
    
      
    </>
  )
}

export default App
