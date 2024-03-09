import React from 'react'
import { Link } from 'react-router-dom'; 
function Login() {

    const handleSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData();
        
    }
  return (
    <div className='h-screen flex items-center justify-center bg-green-400'>
        <form method='POST' onSubmit={handleSubmit}>
          {/* <!-- Email input --> */}
          <div className=" mb-4">
            <input type="email" name='email' id="form1Example13" className="form-control form-control-lg" /><br />
            <label className="form-label text-gray-800" htmlFor="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className=" mb-4">
            <input type="password" name='password' id="form1Example23" className="form-control form-control-lg" /><br />
            <label className="form-label text-gray-800" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4 hover:text-blue-100">
           
            Don't Have Account?
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>

         
          
        </form>
    </div>
  )
}

export default Login