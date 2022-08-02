const mongoose = require("mongoose")

const posts = mongoose.Schema({
    taskTitle:{
        type:String,
        required:true
    },
    taskContent:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
   
},{timestamps:true})

module.exports = mongoose.model("tasks",posts)