import React, { useState, } from 'react'
import signupimg from  '../images/signupimg.png'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({name:'',email:'',phone:'',work:'', password:'',cpassword:''})
  let name,value;
  const inputChange = (e) =>{

    
    name = e.target.name
    value = e.target.value
    setUser({...user, [name]:value})
  }

  const postdata = async (e) =>{
    e.preventDefault()
    let {name,email,phone,work,password,cpassword} = user
    const fetchdata = await fetch('/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })
    const data = await fetchdata.json()
    if(data.error === 'please fille all field'){
      window.alert('Please fill all fields')
    }else if(data.error === 'user Already exist'){
      window.alert("User Already Exists")
    }else if(data.error === 'please enter same password'){
      window.alert('Please Enter Confirm Password Same')
    }
    else{
      navigate('/login')
    window.alert('Login Successfull')
    }

  }
  return (
    <>
    <div className="signup">
      <div className="container d-flex justify-content-center">
        <div className="form-content row mx-auto mt-5 row">
        <form className='col-12 col-md-6 form-design'>

          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="name"><i className="fa-solid fa-user"></i>&nbsp;</label>
            <input type="text" autoComplete='off' onChange={inputChange} name='name' className='register_input form-control' value={user.name} placeholder='Your Name' />
          </div>
          <div className="input-group">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i>&nbsp;</label>
            <input type="email" autoComplete='off' onChange={inputChange} name='email' className='register_input form-control' value={user.email} placeholder='Your Email' />
          </div>
          <div className="input-group">
            <label htmlFor="phone"><i className="fa-solid fa-phone"></i>&nbsp;</label>
            <input type="phone" autoComplete='off' onChange={inputChange} name='phone' className='register_input form-control' value={user.phone} placeholder='Your phone' />
          </div>
          <div className="input-group">
            <label htmlFor="work"><i className="fa-solid fa-address-book"></i>&nbsp;</label>
            <input type="text" autoComplete='off' onChange={inputChange} name='work' className='register_input form-control' value={user.work} placeholder='Your Work' />
          </div>
          <div className="input-group">
            <label htmlFor="password"><i className="fa-solid fa-key"></i>&nbsp;</label>
            <input type="password" autoComplete='off' onChange={inputChange} name='password' className='register_input form-control' value={user.password} placeholder='Password' />
          </div>
          <div className="input-group">
            <label htmlFor="cpassword"><i className="fa-solid fa-key"></i>&nbsp;</label>
            <input type="password" autoComplete='off' onChange={inputChange} name='cpassword' className='register_input form-control' value={user.cpassword} placeholder='Confirm Your Password' />
          </div>
          <div className="input-group">
           <input type="submit" onClick={postdata} className='btn mybtn form-control' value='register' name='submit-form' id='submit-form' />
          </div>
        </form>
        <div className="signupimg col-12 col-md-6 mt-4">
      <figure>
        <img src={signupimg} className='img-fluid' alt="signup img" />
      </figure>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
