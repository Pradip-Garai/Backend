const Auth = (req,res,next)=>{
    //Authentication
//dummy code
const token = "ABCDEF";
const Access = token === "ABCDEF"?1:0;
if(!Access){
    res.status(403).send("No Permission");
}
else{
    next();
}
}

module.exports = {
    Auth,
}