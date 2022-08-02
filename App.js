const express = require("express")
const db = require("./config/db")
const app = express()
const formData = require('express-form-data');
const errorHandler = require("./middlewares/errorHandler")
require("dotenv").config()
const cors = require('cors');
const notFound = require("./middlewares/notFound");
app.use(cors());



app.use(express.json())
app.use(formData.parse())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/:id/:clusterId',(req,res)=>{
    res.status(200).json({
        id:req.params.id,
        clusterId:req.params.clusterId,
        bodyId:req.body.id
    })
    })


//    app.post('/posts',async (req,res)=>{

//     try {
//         if(!req.body.title || !req.body.content) throw new Error("bad request")
//     } catch (error) {
//         res.status(400).json({
//             errorMessage:error.message,
//             data:[]

//         })   
//     }

//     try {
//         const newPost = req.body.image ? postModel({title: req.body.title,content:req.body.content,image:req.body.image})
//          :postModel({title: req.body.title,content:req.body.content})
//         newPost.save()
//         res.status(201).json({
//             data:[newPost]
//         })
//     } catch (error) {
//         res.status(500).json({
//             errorMessage:error.message,
//             data:[]
//         })
//     }
//    }) 

require("./routes/task")(app)

app.use(notFound)
app.use(errorHandler)
const start = async ()=>{
    try {
        await  db()
        listen()

    } catch (error) {
        console.log(error.message)
    }

}

const listen = ()=>{
    const PORT = process.env.PORT || 5050

    app.listen(PORT,()=>{
        console.log(`app running on port ${PORT}`)
    })
}

start()


