const mongoose=require("mongoose")
const Schema =mongoose.Schema
const NodeSchema=new Schema({
    user:String,
    title:String,
    content:String,
})

module.exports=mongoose.model("Mindmap",NodeSchema)
