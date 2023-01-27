import React,{ createContext, useReducer } from 'react'
import'./App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/404error'
import Logout from '../src/components/Logout'
import {reducer,initialState} from './components/Reducer/UseReducer'
const Routing = () =>{
  
  return   ( 
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route element={<Error/>}/>
  </Routes>
  </BrowserRouter>
  )

}
export const userContext = createContext();
const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <userContext.Provider value={{state,dispatch}}>

      <Routing/>
      

      </userContext.Provider>
      
    </div>
  )
}

export default App

