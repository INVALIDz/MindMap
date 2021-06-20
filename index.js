const mongoose=require("mongoose")
const express=require("express")
const router=express.Router()
const { check, validationResult } = require('express-validator/check')
const app=express()
const gravatar=require('gravatar')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config')
const auth=require('./middleware/auth')

const Point=require('./node')
const Mindmap=require('./mindmap')
const User=require('./user')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.dir(app)
mongoose.connect('mongodb://localhost:27017/MindMap',{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology:true})
.then(()=>{console.log("Connection open.")})
.catch((err)=>{
    console.log("OH,ERR!")
    console.log(err)
})

//const db=mongoose.connection;
//db.on("error",console.error.bind(console,"Connection Error:"))
//db.once("open",function(){
//    console.log("Connection Open!")
//})

app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/user',require('./routes/api/user'))


app.get("/",async(req,res)=>{
    console.log("New request!")
    const user=new Point({title:'theme',parent:"Null",Children:["branch1","branch2","branch3"]})
    await user.save()
    res.sendFile('index.html', {root: __dirname})
})
app.get("/landing",(req,res)=>{ 
    console.log("New request!")
    res.sendFile('./client/index.html', {root: __dirname})
})
app.get('/interface',(req,res)=>{ 
    console.log("New request!")
    res.sendFile('./client/interface.html', {root: __dirname})
})
app.get("/2.48a753dc.chunk.css",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/css/2.48a753dc.chunk.css', {root: __dirname})
})
app.get("/2.48a753dc.chunk.css.map",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/css/2.48a753dc.chunk.css.map', {root: __dirname})
})
app.get("/main.ec1732f3.chunk.css",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/css/main.ec1732f3.chunk.css', {root: __dirname})
})
app.get("/main.ec1732f3.chunk.css.map",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/css/main.ec1732f3.chunk.css.map', {root: __dirname})
})
app.get("/2.927a612b.chunk.js",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/js/2.927a612b.chunk.js', {root: __dirname})
})
app.get("/2.927a612b.chunk.js.map",(req,res)=>{
    console.log("New request!")
    res.sendFile('build/static/js/2.927a612b.chunk.js.map', {root: __dirname})
})
app.get("/main.3a19fc9a.chunk.js",(req,res)=>{
    
    console.log("New request!")
    res.sendFile('build/static/js/main.3a19fc9a.chunk.js', {root: __dirname})
})
app.get("/main.3a19fc9a.chunk.js.map",(req,res)=>{
    
    console.log("New request!")
    res.sendFile('build/static/js/main.3a19fc9a.chunk.js.map', {root: __dirname})
})

app.post("/save",async(req,res)=>{
   console.log(req.body)
    const k=await new Mindmap({content:req.body.content})
    await k.save()
})
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const newNode = {
         NodeID:req.body.node_id,
         NewNodeID: req.body.new_node_id,
     }
     const n=await new Point({id:newNode.NewNodeID,content:'新建节点',parent:newNode.NodeID})
     await n.save()
 })
app.post("/changeText",async(req,res)=>{
    const newNode =req.params
    await console.log(req.body.node_id)
    await console.log(req.body.text)
    await Point.find({id:req.body.node_id}).updateMany({content:req.body.text})
   // await Point.find({content:'blank!!!'}, function(err, data){
   //     if(err){
    //        console.log(err);
    //        return
     //   }
    
    //    if(data.length == 0) {
    //        console.log("No record found")
    //        return
    //    }
    
    //    console.log(data[0].name);
  //  })
 })
/*app.post("/editNodeInfo"),async(req,res)=>{
    const new_node=res.new_node
    const point=new Point({title:new_node.new_node_id,content:new_node.info,parent:new_node.node_id,Children:[]})
    await point.save()
}*/
app.listen(4000,()=>{
    console.log("Listening on port 4000!")
})