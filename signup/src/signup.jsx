/* eslint-disable no-undef */

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom';

function Signup() {
  const [role,setRole]=useState('')
  const [name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
 
  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update the role state when a radio button is selected
  };
  const handleSubmit= (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password,role})
    .then(result => {
        console.log(result)
       
       
           alert("Created") 
       
        navigate('/login')
    } )
    .catch(err=>console.log(err))

  }
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-75">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input 
                type="radio"
                id="staff"
                name="staff"
                value="staff"
                checked={role === "staff"} // Set checked attribute based on role state
                onChange={handleRoleChange}

        />
        <label htmlFor="staff">Staff</label>
        <input 
                type="radio"
                id="student"
                name="student"
                value="student"
                checked={role === "student"} // Set checked attribute based on role state
                onChange={handleRoleChange}

        />
        <label htmlFor="student">Student</label>
          <div className="mb-17">
            <label htmlFor="email">
              <strong>Name</strong>  
            </label>
            <input 
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control rounded-0"
            />
          </div>
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
          </div>
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
          <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
          </form>
          <p>Already have an account</p>
          <Link to="/login"className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">Login</Link>
       

      </div>

    </div>
  )
}

export default Signup
