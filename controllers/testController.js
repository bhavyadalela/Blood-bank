//res,req ko add krne se cllback function bangya
 const testController=(req,res)=>{
res.send({
    message:"test route",
    success:true,

})
};
module.exports={testController};