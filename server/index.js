const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const RegisterModel=require('./models/Register')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const app=express()

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        RegisterModel.create({name:name,email:email,password:hash})
        .then(result=>res.json("Account created"+result))
        .catch(err=>res.json(err))
    }
        
         )
    //RegisterModel.findOne({email:email})
    //.then(user=> {
       // if(user){
       //     res.json("Already have an account")
       // }
       // else{
       //     RegisterModel.create({name:name,email:email,password:hash})
            
       // }
  //  })
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    RegisterModel.findOne({email:email})
    .then(user=>{
        bcrypt.compare(password,user.password,(err,response)=>{
            if(response){
                const token= jwt.sign({email:user.email,role:user.role,},"jwt-secret-key",{expiresIn:'1d'})
                res.cookie('token',token)
                return res.json("Success")
            }else{
                return res.json("The password is incorrect")
            }
        })
        if(user.password===password){

        }
        else{
            return res.json("No record existed")
        }
    }
    )
})
app.listen(
    3001,
    ()=>
{
    console.log("Server is running")
}
) 