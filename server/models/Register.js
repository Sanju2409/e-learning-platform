const mongoose=require('mongoose')
const RegisterSchema=new mongoose.Schema( {
    name:String,
    email:String,
    password:String,
    role: { type: String, enum: ["staff", "student","admin"] } 

})
const RegisterModel=mongoose.model("registers",RegisterSchema)
module.exports=RegisterModel