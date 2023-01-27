import { useEffect,useState,useContext } from 'react'
import {userContext} from '../App'

const Home = () => {
  const {state,dispatch} = useContext(userContext)
  const [userdata, setuserdata] = useState();
  const [setdata, setsetdata] = useState(true);
  
  const detHomeData = async ()=>{
    try {
	const fetchedData = await fetch('/getHomeData',{
	      method:"GET",
	      headers:{
	        "Content-Type":"application/json"
	      }
	    })
	    const res = await fetchedData.json()
      
	    setuserdata(res.name)
      if(res.message==='invalid user not found'){
        dispatch({type:"USER",payload:true})
        setsetdata(false)
      }

      // if(res.message==='verified'){
      //   setsetdata(true)
      // }

} catch (error) {
  console.log(error);
  setsetdata(false)
}
  }
  useEffect(()=>{
 detHomeData()
  },[])
  return (
    <>
    <div className="home_page">
<div className="container">
<div className="main_text">

      <h1>Welcome</h1>
      <h2>Hello I'm { setdata ? userdata : "User" }</h2>
</div>
</div>
    </div>
    </>
  )
}

export default Home
