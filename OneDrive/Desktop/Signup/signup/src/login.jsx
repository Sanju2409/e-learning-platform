import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';
function Login(){
  //const[role,setRole]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
   

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/login", { email, password })
          .then(result => {
              console.log("Login Result:", result.data);
              if (result.data.status === "Success") {
                if(result.data.role==="admin"){
                  navigate('/addstaff')
                }
               else if(result.data.role==="student"){
                  navigate('/Student-dashboard');
                }
                else{
                  
                  navigate('/Staff-Dashboard',{ state: { userEmail: email } })
                }
                  
              } else {
                if (result.data.error === "No record existed") {
                  alert("This email is not registered. Please register or use a different email.");
              } else if (result.data.error === "Incorrect password") {
                  alert("Incorrect password. Please try again.");
              } else {
                  alert("An error occurred. Please try again later.");
              }
              }
          })
          .catch(err => {
              console.error("Error:", err);
              alert("An error occurred. Please try again later.");
          });
  };
  
    return (
        <div className="row justify-content-center align-items-center  vh-100 ">
         <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body"></div>
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
          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
         
        </form>
        <p>Do not have an account?</p>
        <Link to="/register" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">
          Register
        </Link>
      </div>

    </div>
    </div>
    )
}
export default Login