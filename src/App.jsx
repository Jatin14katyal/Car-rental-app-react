import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Login from "./pages/Login"
import Register from "./pages/Register"

const App=()=>{
  return(
    <Router>
      <Layout />
      
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/login' index element={<Login/>} />
        <Route path='/register' index element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App