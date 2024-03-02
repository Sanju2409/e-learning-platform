import axios from  "axios";
import  {useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";

const AddStaff=()=>{
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const[message,setMessage]=useState('')
  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/addstaff", {
        name,
        email,
        password,
        role:"staff",
      });

      console.log(response);
      alert("Created a staff");
      navigate("/addstaff");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    axios.get('http://localhost:3001/Staff-Dashboard')
    //.then(res=>console.log(res))
    //.catch(err=>console.log(err))
    .then(res=>{
        if(res.data.valid){
           console.log(res.data)
        }
        else{
            navigate('/')
        }
    })
})
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-3">Register staff</h1>
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
        
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default AddStaff;