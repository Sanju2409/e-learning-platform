
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from "./signup";
import Login from "./login" ;
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
