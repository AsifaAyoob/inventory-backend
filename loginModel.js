const Mongoose=require("mongoose")
const loginModel=Mongoose.model("logins",Mongoose.Schema({
    
    loginemail:String,
    loginpass:String
}))

module.exports={loginModel}