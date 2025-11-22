const verifyRole=(...allowedRoles)=>{
    return(req,res,next)=>{
        if(!req.user){
            return res.status(403).json({message:'Access Denied: No User Information'});
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:'Access Denied: Insufficient Permissions'});
        }
        next();
    }
}
module.exports=verifyRole;