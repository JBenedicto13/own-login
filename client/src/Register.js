import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='registerDiv'>
        <div className="headerTitle">
          <h1 className='title'>Register</h1>
        </div>
        <form>
          <div class="mb-3">
            <label for="inpEmail" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="inpEmail" placeholder="Email Address"/>
          </div>
          <div class="mb-3">
            <label for="inpPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inpPassword" placeholder="Password"/>
          </div>
          <div class="mb-3">
            <label for="inpConfirmPassword" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="inpConfirmPassword" placeholder="Confirm Password"/>
          </div>
          <div className='mb-3'>
            <button className='btn btn-primary btnRegister'>Register</button>
          </div>
          <div className='mb-3'>
          {/* <button onClick={useNavigate("register")}>Register</button> */}
          <Link to='/login' className="nav-link redirect-link">Member already? Login here</Link>
          </div>
        </form>
    </div>
  )
}

export default Register