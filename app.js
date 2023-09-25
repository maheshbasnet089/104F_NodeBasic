 const app = require("express")()

 // ALTERNATIVE
//  const express = require("express")
//  const app = express()


//req-request,res-response
app.get("/",(req,res)=>{
  
    // res.send("<mark>Hello i m from home page</mark>")
    res.json({
        manish : "I am from home page",
        
    })

})

app.get("/contact",(req,res)=>{
    res.send("I am from contact page")
})

app.get("/about",(req,res)=>{
    res.send("I am from about page")
})

// 2000 number ko room chae use gar yo project run garna lai 
app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at port 2000")
})

