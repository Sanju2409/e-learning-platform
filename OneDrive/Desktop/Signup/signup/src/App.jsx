//import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import Login from './login';
//import Dashboard from './';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Dashboard from './Dashboard';
//import PrivateRoute from './PrivateRoute';
//import { AuthProvider } from './context/AuthProvider';
import AddStaff from './AddStaff';
import StudentsDashboard from './Student-dashboard'; 
import StaffDashboard from './Staff-Dashboard'; 
import ViewCourse from './view-course';
import CreateCourse from './create-course';


function App() {
  return (
  
    <Router>
    
        <Routes>
       
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/addstaff" element={<AddStaff/>} />
          <Route path="/Student-dashboard" element={<StudentsDashboard />} />
          
          <Route path="/Staff-Dashboard" element={<StaffDashboard />} />
         
        
          <Route path="/viewcourse" element={<ViewCourse/>} />
          <Route path="/createcourse" element={<CreateCourse/>} />
       
          
         
         
          
        </Routes>
      
    </Router>
  );
}

export default App;
