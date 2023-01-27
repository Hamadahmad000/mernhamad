import React,{useEffect, useState} from "react";

const Contact = () => {
//  const [addData, setaddData] = useState();
  const datecontactdata = async ()=>{
    const fetcheddatacontact = await fetch('/getContactData',{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
  const res = fetcheddatacontact.json()
  // setaddData(res)

  
  }

  // getData 
  useEffect(()=>{
  datecontactdata()
  },[])









  // send data

  let [userData, setuserData] = useState({
    fname:'',
    lname:'',
    email:'',
    message:''


  });

  const handleUserChangeData = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setuserData({...userData,[name]:value})
  }

  const postUserData = async (e) =>{
try {
	    e.preventDefault()
	    const {fname,lname,email,message} = userData
      console.log(fname)
	    const fetchdata = await fetch('/usermessage',{
	      method:'POST',
	      headers:{
	        "Content-Type":"application/json"
	      },
	      body:JSON.stringify({
          fname,lname,email,message
	      })
	    })
	    const data = await fetchdata.json()
      if(data.message === 'please fill all fields'){
        alert('please fill all fields')
      }else if(data.message === 'successfull'){
        alert('message sent Successfull')

      }else{
        alert('failed')
      }
} catch (error) {
	console.log('message send failed')
	window.alert('message send failed')
}

  }
  return (
    <>
   
      <div className="contact_form">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mt-4 offset-1">
              <div className="admin_info mx-auto">
                <div className="container">
                  <div className="row">

                      <div className="admin_info_box contact_box col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="logo_contact">
                          <i className="fa-solid fa-address-card"></i> &nbsp; Phone
                        </div>
                        <div className="text_contact">+923125567359</div>
                      </div>
                  
                  <div className="admin_info_box col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="logo_email">
                      <i className="fa-solid fa-phone"></i> &nbsp; Email
                    </div>
                    <div className="text_email">hamadahmad000143@gmail.com</div>
                  </div>

                  <div className="admin_info_box col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="logo_address">
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Address
                    </div>
                    <div className="text_address">Gujranwala, Pakistan</div>
                  </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* contact section  */}
<form method="POST">
<div className="admin_message_form">
  <div className="container">
    <div className="col-12">
      <div className="container-fluid admin_contact mt-4">
        <div className="row Main_admin_message">
          {/* <div className="col-12 col-6">
            <figure>
            <i className="fa-regular fa-comments admin_message_icon"></i>
            </figure>
          </div> */}
          <div className="col-12 col-12 sending_section">
             <div className="send_message_admin">
              <div className="form-controle">
                <label htmlFor="firstname"></label>
                <input type="text" 
                value={userData.fname}
                onChange={handleUserChangeData}
                name='fname'
                
                
                autoComplete="off"  className='form-control' placeholder="What's Your FirstName ?"/>
              </div>
              <div className="form-controle">
                <label htmlFor="lastname"></label>
                <input type="text" 
                value={userData.lname}
                onChange={handleUserChangeData}
                name='lname'
                
                
                autoComplete="off" className='form-control' placeholder="lWhat's Your LastName ?"/>
              </div>
              <div className="form-controle">
                <label htmlFor="email"></label>
                <input type="text" 
                value={userData.email}
                onChange={handleUserChangeData}
                name='email'
                
                
                autoComplete="off" className='form-control' placeholder="What's Your Email ?"/>
              </div>
              <div className="form-controle">
                <label htmlFor="email"></label>
                <textarea 
                value={userData.message}
                onChange={handleUserChangeData}
               
                
                
                autoComplete="off" name="message" id="message" cols="30" rows="5" className='form-control' placeholder="your Question ?"></textarea>
              </div>
              <div className="form-controle">
                
                <input type="submit" onClick={postUserData} 
                 autoComplete="off" name="Send Message" className="btn mybtn" />
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
      </div>
    </>
  );
};

export default Contact;
