import axios from  "axios";
import  {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
const StaffDashboard=()=>{
    const[message,setMessage]=useState('')
    const navigate=useNavigate()
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/Staff-Dashboard')
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
             <h2>Staff Dashboard {message}</h2>
        </div>
    )
}
export default StaffDashboard;