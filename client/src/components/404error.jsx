import React from 'react'
import error_page from '../images/error_page.jpg'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const backToHome =()=>{
    navigate('/')
  }
  return (
    <>
       <div className="error-point">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center flex-column align-items-center py-5">
              <figure>
                <img src={error_page} className='error_page_size img-fluid my-error-img' alt="404 sorry page not found go back to Home" />
              </figure>
              <button className='btn btn-outline-success' onClick={backToHome}>Go Back To Home Screen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error
