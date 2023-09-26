 const app = require("express")()

 // ALTERNATIVE
//  const express = require("express")
//  const app = express()


//req-request,res-response
app.get("/",(req,res)=>{
  
    // res.send("<mark>Hello i m from home page</mark>")
    res.json({
        message : "hello world ",
        status : "student"
    })

})

app.get("/contact",(req,res)=>{
    res.json({
        message : "You are in contact Page"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        status  : 200,
        message : "You are in about page",
        
    })
})





// 2000 number ko room chae use gar yo project run garna lai 
app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at port 2000")
})

