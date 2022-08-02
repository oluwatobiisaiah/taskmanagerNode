const mongoose = require("mongoose")

const posts = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model("posts",posts)