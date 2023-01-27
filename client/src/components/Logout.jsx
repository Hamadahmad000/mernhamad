import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
const Logout = () => {
    const {state,dispatch} = useContext(userContext)
const navigate = useNavigate()
    const LogoutUser = async ()=>{

        const fetchlog = await fetch('./logoutUser',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            Credentials:'include'
        })
        const res = fetchlog.json()
        if(!res.status === 200){
            window.alert('Try Again')
        }else{
            navigate('/login')
            dispatch({type:"USER",payload:true})
        }

    }

    useEffect(()=>{
    LogoutUser()
    },[])
  return (
    <>
      
    </>
  )
}

export default Logout
