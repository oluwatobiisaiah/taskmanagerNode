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
    dateAdded:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("tasks",posts)