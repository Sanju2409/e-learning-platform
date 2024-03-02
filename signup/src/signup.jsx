import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
 //const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //const handleRoleChange = (e) => {
   // setRole(e.target.value);
  //};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
        role:"student",
      });

      console.log(response);
      alert("Created");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-3">Register</h1>
                  <form onSubmit={handleSubmit}>
                      
              
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already have an account</p>
        <Link to="/login" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;