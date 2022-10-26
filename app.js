const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")

const{signupModel}=require("./signupModel")
const{invoiceModel}=require("./invoiceModel")
const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://asifa:jungkook97@cluster0.xp7ua.mongodb.net/Inventory?retryWrites=true&w=majority")

app.post("/signups",async(req,res)=>{
    const signupss=req.body
    const ob=new signupModel(signupss)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occured")
        }
        else
        {
            res.send(data)
        }
    }) 
})
app.get("/invoices",async(req,res)=>{
    invoiceModel.find(
        (error,data)=>
        {
            if(error)
            {
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/logins", async(req, res) => {
    const request = req.body
    signupModel.findOne({ loginemail: request.loginemail }, (err, data) => {
        if (data) {
            if (data.loginpassword == request.loginpassword) {
                res.send({ "success": true, data: data });

            } else {
                res.send({ "success": "Invalid password!" });
            }
        } else {
            res.send({ "success": "No User Found!" });
        }
    })
})
app.listen(3200,()=>{console.log("Server running at http://localhost:3200" )

})                                                                                                                                                                                  