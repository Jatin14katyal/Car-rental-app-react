import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Login from "./pages/Login"
import Register from "./pages/Register"
import CarDetails from "./pages/CarDetails";

const App=()=>{
  return(
    <Router>
      <Layout />
      
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/login' index element={<Login/>} />
        <Route path='/register' index element={<Register/>} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  )
}

export default App