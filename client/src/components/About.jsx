import React, { useEffect,useState } from 'react'
import Employee from '../images/Employee.png'
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate()
  const [userData, setuserData] = useState({});
  const callAboutPage = async ()=>{
     try {
	const res = await fetch("/getData",{
	      method:"GET",
	      headers:{
	        Accept: "application/josn",
	        "Content-Type": "application/josn"
	      },
	      credentials:"include"
	     })
	     const data = await res.json()
	     setuserData(data)
	     if(!data.status === 200){
	     
	      window.alert('please login')
        navigate('/login')
      }else if(data.message==='invalid user not found'){
	      
	      window.alert('please login')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      navigate('/login')
      alert('please first login')
	
}
  }

  useEffect(()=>{
   callAboutPage()
  },[])

  return (
    <>
     <div className="container employ_profile p-5">
      <form method='GET'>
        <div className="row">

          <div className="col-md-4">
            <img src={Employee} className='img-fluid employee-profile' alt="Employ" />
          </div>

          <div className="col-md-6">
            <div className="profile_head">
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p className='mt-5 mb-3'>RANKINGS: <span>1/10</span></p>

              <ul className="nav nav-tabs nav-tabs-about" role='tablist'>

                <li className="nav-item">
                  <a href="#home" data-toggle='tab' role='tab' className="nav-link" id='home-tab'>Home</a>
                </li>

                <li className="nav-item">
                  <a href="#profile" data-toggle='tab' role='tab' className="nav-link" id='profile-tab'>profile</a>
                </li>

              </ul>
               
            </div>
          </div>

          <div className="col-2">
            <input type="submit" className='profile-edit-btn btn border' value='Edit Profile' name='btnAddMore'/>
          </div>

        </div>

        {/* second potion  */}

        <div className="row">
          
          <div className="col-md-4 mt-3">

            <p>Work Links</p>
            <a href="#">Youtube</a><br />
            <a href="#">Facebook</a><br />
            <a href="#">Instagram</a><br />
            <a href="#">Telegram</a><br />
            <a href="#">Twitter</a><br />
            <a href="#">Instagram</a><br />
            
          </div>

          <div className="col-md-8 mt-4">

            <div className="tab-content profile-tab" id='myTabContent'>
              <div className="tab-pane show active" id='home' role='tabpanel' aria-labelledby='home'>
               <div className="row">

                <div className="col-md-6">
                  <label>User ID</label>
                </div>

                <div className="col-md-6">
                  <p>{userData._id}</p>
                </div>


               </div>
              </div>

               <div className="row">

                <div className="col-md-6">
                  <label>Name</label>
                </div>

                <div className="col-md-6">
                  <p>{userData.name}</p>
                </div>


               </div>
               <div className="row">

                <div className="col-md-6">
                  <label>Email</label>
                </div>

                <div className="col-md-6">
                  <p>{userData.email}</p>
                </div>


               </div>
               <div className="row">

                <div className="col-md-6">
                  <label>Phone</label>
                </div>

                <div className="col-md-6">
                  <p>{userData.phone}</p>
                </div>


               </div>
             

            </div>




          </div>
        </div>

      </form>
     </div>
    </>
  )
}

export default About
