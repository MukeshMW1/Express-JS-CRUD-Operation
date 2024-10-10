const errorHandler = (err,req,res,next)=>{
if(err.staus)
{
res.status(err.stauts).json({msg:err.message});
}
    res.status(404).json({message:err.message});
}

export default errorHandler;