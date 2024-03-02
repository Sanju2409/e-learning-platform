import axios from  "axios";
import  {useEffect,} from 'react'
import {Link, useNavigate,useLocation } from "react-router-dom";

const StaffDashboard=()=>{
   // const[message,setMessage]=useState('')
  // const [userEmail, setUserEmail] = useState("");
  const location=useLocation()
  const userEmail =  location.state?.userEmail;
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/Staff-Dashboard')
        //.then(res=>console.log(res))
        //.catch(err=>console.log(err))
        .then(res=>{
            if(res.data.valid){
               // setMessage(res.data.message)
            }
            else{
                navigate('/')
            }
        })
    })
    return(

<nav className="navbarstaff justify-content-space-between fixed-top ">
<div className="container-fluid d-flex justify-content-between">
      <div><p className="welcome-message">Welcome, {userEmail}!</p></div>
           
          
          <div>
          <ul className="navbar-nav-horizontal" >
          
          <li className="nav-item">
            <Link to="/Staff-Dashboard" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/viewcourse" className="nav-link">View Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/createcourse" className="nav-link">Create Course</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
        </ul></div> 
           
           
        </div>
      </nav>

       
    )
}
export default StaffDashboard;