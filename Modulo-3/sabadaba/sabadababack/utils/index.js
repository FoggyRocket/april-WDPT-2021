
exports.catchError = (controller) =>{
    return (req,res,next)=>{
        controller(req,res).catch( err => next(err)  )
    }
}