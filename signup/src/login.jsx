import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/register ",{email,password})
        .then(result=>{
            console.log(result.data),
            navigate('/home')
        }).catch(err=>console.log(err))

        .catch(err=>console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-75">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div  className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input 
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="form-control rounded-0"
            />
          </div>;
          <div  className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input 
                type="password"
                placeholder="Enter password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={ (e)=>setPassword(e.target.value)}
                className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
         
        </form>

      </div>

    </div>
    )
}
export default Login