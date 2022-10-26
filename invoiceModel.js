const Mongoose=require("mongoose")
const invoiceModel=Mongoose.model("invoices",Mongoose.Schema({
    
    iid:String,
    uname:String,
    prdtname:String,
    pqty:String,
    price:String,
    date:String
}))

module.exports={invoiceModel}