import React,{ useContext, useState } from 'react'
import signupimg from  '../images/signupimg.png'
import { useNavigate } from 'react-router-dom';
import {userContext} from '../App'




const Login = () => {
  const {state,dispatch} = useContext(userContext)
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const navigate = useNavigate()
 

 const postdata = async (e) =>{
    e.preventDefault()
    const data = await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })
    const res = await data.json()
   if(res.errror === "please fill all field"){
      // window.alert('User Not Found & server issue please try after some time')
      window.alert("please fill all fields")
      console.log('server issue please try after some time')
    }else if(res.message === 'login successfully'){
      window.alert('login successfull')
      console.log('login successfull')
      dispatch({type:"USER",payload:false})
      navigate('/')
    }else{
      window.alert('invalid user detail')
    }
    
 }
  return (
    <>
      <div className="signup">
      <div className="container d-flex justify-content-center">
        <div className="form-content row mx-auto mt-5 row">
        <div className="signupimg col-12 col-md-6">
      <figure>
        <img src={signupimg} className='img-fluid' alt="signup img" />
      </figure>
        </div>
        <form className='col-12 col-md-6 form-design' method='POST'>

          <h2>Login</h2>
         
          <div className="input-group">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i>&nbsp;</label>
            <input type="email" autoComplete='off' onChange={(e)=> setEmail(e.target.value)} value={email} name='email' className='form-control register_input' placeholder='Your Email' />
          </div>
        
          <div className="input-group">
            <label htmlFor="password"><i className="fa-solid fa-key"></i>&nbsp;</label>
            <input type="password" autoComplete='off' onChange={(e)=> setPassword(e.target.value)} value={password} name='password' className='form-control register_input' placeholder='Password' />
          </div>
          
          <div className="input-group mt-4">
           <input type="submit" onClick={postdata} className='btn mybtn form-control' value='Login' name='submit-form' id='submit-form' />
          </div>
        </form>
        
        </div>
      </div>
    </div> 
    </>
  )
}

export default Login
