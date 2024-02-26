//import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import Login from './login';
//import Dashboard from './';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
//import PrivateRoute from './PrivateRoute';
//import { AuthProvider } from './context/AuthProvider';

import StudentsDashboard from './Student-dashboard'; 
import StaffDashboard from './Staff-Dashboard'; 

function App() {
  return (
    <Router>
    
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Student-dashboard" element={<StudentsDashboard />} />
          <Route path="/Staff-Dashboard" element={<StaffDashboard />} />
          
          
        </Routes>
      
    </Router>
  );
}

export default App;
