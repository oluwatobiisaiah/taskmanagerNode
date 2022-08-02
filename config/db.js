const mongoose = require("mongoose")

const config = require("config")

const db = config.get("MONGO_URI")
 const connectDB = async ()=>{
try {
    await mongoose.connect(db)
    console.log("Connected successfully")
} catch (error) {
    console.log("DB not connected",error)
}

 }

 module.exports = connectDB