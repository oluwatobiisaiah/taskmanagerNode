const notFound = (req,res)=>{
res.status(404).json({message:"route not found",status:{code:404}})
}

module.exports = notFound