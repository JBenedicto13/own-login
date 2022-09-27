import './App.css';
import Login from './Login';
import Register from './Register';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <h1>Login System using Mern Stack</h1>
      <br/>
      <Link className='btn btn-outline-primary' to='/login' element={<Login />}>Go to Login</Link>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
