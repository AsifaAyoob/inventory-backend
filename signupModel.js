const Mongoose=require("mongoose")
const signupModel=Mongoose.model("signups",Mongoose.Schema({
    
    firstname:String,
    lastname:String,
    email:String,
    shop:String,
    password:String
}))

module.exports={signupModel}