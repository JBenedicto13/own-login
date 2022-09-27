import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/read').then((response) => {
            setUserList(response.data);
        });
    }, [])

    const handleSubmit = (event) => {
        axios.post('http://localhost:3001/insert', {
            email: email,
            password: password,
        });

        event.preventDefault();
    };

  return (
    <div className='loginDiv'>
        <div className="headerTitle">
        <h1 className='title'>Login</h1>
        </div>
        <form>
        <div className="mb-3">
            <label htmlFor="inpEmail" className="form-label">Email Address</label>
            <input
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="inpEmail"
                placeholder="Email Address"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="inpPassword" className="form-label">Password</label>
            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="inpPassword"
                placeholder="Password"
            />
        </div>
        <div className='mb-3'>
            <button onClick={handleSubmit} className='btn btn-primary btnLogin'>Login</button>
        </div>
        <div className='mb-3'>
        <Link to='/register' className="nav-link redirect-link">Not yet a member? Register</Link>
        </div>
        </form>
    </div>
  )
}

export default Login