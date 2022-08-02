const asyncWrapper = require("../middlewares/asyncHandler");
const taskModel = require("../models/task");

exports.createTask = asyncWrapper( async (req,res)=>{

    if(!req.body.taskTitle || !req.body.taskContent){
        res.status(400).json({
            errorMessage:"bad request",
            data:[]
        })
    }else{
            const newTask = req.body.image ? taskModel({taskTitle: req.body.taskTitle,taskContent: req.body.taskContent,image:req.body.image})
                     :taskModel({taskTitle: req.body.taskTitle,taskContent:req.body.taskContent})
                 await  newTask.save()
                    res.status(201).json({
                        data:[newTask]
                    })
            
    }

 



}
)

exports.findAll =  asyncWrapper( async (req,res)=>{
        const task =   await  taskModel.find()
        
        

        res.status(200).json({
            data: task.sort((a,b)=>{
            
                 
                return new Date(b.updatedAt) - new Date(a.updatedAt) 
                  })
        })

    


}
)
exports.findOne = asyncWrapper( async (req,res)=>{
    if(!req.params.id){
        res.status(400).json({
            errorMessage:"bad request",
            data:[]
        })
    }else{
            const task = await taskModel.findOne({_id:req.params.id})
            res.status(200).json({
                data:task
            })
       
    }

}
)

exports.deleleTask = asyncWrapper( async (req,res)=>{
    if(!req.params.id){
        res.status(400).json({
            errorMessage:"bad request",
            data:[]
        })
    }else{
            const task = await taskModel.deleteOne({_id:req.params.id})
            res.status(200).json({
                data: task
            })
        
    }

})

exports.updateTask = asyncWrapper( async (req,res)=>{
    if(!req.body.taskContent || !req.body.taskTitle || !req.body.isCompleted){
        res.status(400).json({
            errorMessage:"bad request",
            data:[]
        }) 
    }else{
            const task = await taskModel.findOneAndUpdate({_id:req.body.id},{taskTitle:req.body.taskTitle,taskContent:req.body.taskContent,isCompleted:req.body.isCompleted},{new:true})
            res.status(201).json({
                data: task
            })
      
    }

})