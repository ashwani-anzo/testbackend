const express= require("express")
const cors =require("cors")

const app=express()
var obj1={
    data:"Welcome"
}
var arr=[
    {id:1,name:"name1"},
    {id:2,name:"name2"}
]
//console.log(app);
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send(obj1)
})
app.get("/arr",(req,res)=>{
    res.send(arr)
})

app.listen("8085",()=>{
    console.log("server in running port 8080");
   
})


