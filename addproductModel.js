const Mongoose=require("mongoose")
const addproductModel=Mongoose.model("addproducts",Mongoose.Schema({
    
    pname:String,
    pcategory:String,
    model:String,
    qty:String,
    price:String,
    img:String,
    color:String
}))

module.exports={addproductModel}