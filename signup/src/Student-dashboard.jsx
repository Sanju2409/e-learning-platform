import axios from  "axios";
import  {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
const StudentDashboard=()=>{
    const[message,setMessage]=useState('')
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/Student-dashboard')
        //.then(res=>console.log(res))
        //.catch(err=>console.log(err))
        .then(res=>{
            if(res.data.valid){
                setMessage(res.data.message)
            }
            else{
                navigate('/')
            }
        })
    })
    return(
        <div>
             <h2>Student Dashboard {message}</h2>
             <nav>
                <ul>
                    <li>Home</li>
                    <li>My Courses</li>
                    <li>Profile</li>
                </ul>
             </nav>
        </div>
    )
}
export default StudentDashboard;