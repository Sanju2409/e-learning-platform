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
    const {name,email,password,role}=req.body;
  
    RegisterModel.findOne({email:email})
    .then(user=> {
        if(user){
            res.json("Already have an account")
       }
        else{
            bcrypt.hash(password,10)
            .then(hash=>{
            RegisterModel.create({name:name,email:email,password:hash,role:role})
            .then(result=>res.json("Account created"))
          //  .alert("Created")
            .catch(err=>res.json(err))
        }
            
             ) .catch(err=>res.json(err))
            
            
        }
    })
   
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return res.json({ error: "Internal Server Error" });
                    }
                    if (result) {
                        // Passwords match
                        const token = jwt.sign({ email: req.body.email, role: req.body.role}, "jwt-access-key", { expiresIn: '1m' });
                        const refreshtoken= jwt.sign({ email: req.body.email, role: req.body.role}, "jwt-refresh-key", { expiresIn: '2m' });
                        res.cookie('token', token,{httpOnly:true},{maxAge:60000});
                        res.cookie('refreshtoken', refreshtoken,{httpOnly:true,maxAge:60000,secure:true,sameSite:'strict'});

                        return res.json({ status: "Success", role: user.role });
                    } else {
                        // Passwords don't match
                        return res.json({ error: "Incorrect password" });
                    }
                });
            } else {
                return res.json({ error: "No record existed" });
            }
        })
        .catch(err => {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        });
});
const varifyUser=(req,res,next)=>{
    const accesstoken=req.cookies.token;
    if(!accesstoken)
    {
        if(renewToken(req,res)){
            next()
        }
    }
    else{
        jwt.verify(accesstoken,'jwt-access-key',(err,decoded)=>{
            if(err)
            {
                return res.json({valid:false,message:"Invalid token"})
            }
            else
            {
                req.email=decoded.email
                next()
            }
        })
    }
};
const renewToken=(req,res)=>{
    const refreshtoken=req.cookies.refreshtoken;
    let exist=false;
    if(!refreshtoken)
    {
        return res.json({valid:false,message:"No refresh token"})
    }
    else{
        jwt.verify(refreshtoken,'jwt-refresh-key',(err,decoded)=>{
            if(err)
            {
                return res.json({valid:false,message:"Invalid refreshtoken"})
            }
            else
            {
                const token = jwt.sign({ email: decoded.email, role: req.body.role}, "jwt-access-key", { expiresIn: '1m' });
                res.cookie('token', token,{httpOnly:true},{maxAge:60000});
                exist=true;
            }
        })
    }
    return exist;
}
app.get('/Student-dashboard',varifyUser,(req,res)=>{
    return res.json({valid:true,message:"authorized"})
})
app.get('/Staff-Dashboard',varifyUser,(req,res)=>{
    return res.json({valid:true,message:"authorized"})
})
app.listen(
    3001,
    ()=>
{
    console.log("Server is running")
}
) 