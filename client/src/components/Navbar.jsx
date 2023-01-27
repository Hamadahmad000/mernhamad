import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../App'

const RenderMenu = ()=>{
  const {state,dispatch} = useContext(userContext)
  if(state){
    return(
      <>
         <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/signup">Register</NavLink>
          </li>
         
      </>
    )
  }else{
  return(
  <>
     <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/logout">Logout</NavLink>
      </li>
  </>
)
  
}
}
const Navbar = () => {
  const [status , setStatus] = useState('')
  if(!navigator.onLine){
     setStatus(<p className='d-flex text-center align-items-center justify-content-center text-success'>No internet !</p>)
  }
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand logo" to="/">HamadM<span className='redtext'>irza</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <RenderMenu/>
      </ul>
      
    </div>
  </div>
</nav>

{status}
    </div>
 
   
    </>
   
  )
}

export default Navbar
