const router = require("express").Router()
const taskController = require("../controllers/tasks")

module.exports = app=>{
    router.get("/",taskController.findAll).post("/",taskController.createTask).put("/",taskController.updateTask).delete("/:id",taskController.deleleTask).get("/:id",taskController.findOne)
    app.use("/api/v1/posts/",router)

    // error handler
}