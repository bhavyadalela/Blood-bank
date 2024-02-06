const inventoryModel = require("../models/inventoryModel")
const userModel = require("../models/userModel");
//CREATE INVENTORY 
const createInventoryController=async(req,res)=>{
    try{
        const {email,inventoryType}=req.body
         //validation
         const user=await userModel.findOne({email})
         if(!user){
             throw new Error('User Not Found')
         }
         
         if(inventoryType==="in" && user.role!='user'){
             throw new Error('Not a donor hospital')
         }

         const inventory=new inventoryModel(req.body)
         await inventory.save();
         return res.status(200).send({
            success:true,
            message:"New Blood Record added"
         })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in create Inventory API',
            error
        })
    }
}

//GET ALL BLOOD RECORDS
const getinventoryController=async(req,res)=>{
  try{
    const inventory=await inventoryModel.find({
        organisation:req.body.userId,
    })
    return res.status(200).send({
        success: true,
        message: "get all records successfully",
        inventory,
      });
  }
  catch(error){
     console.log(error)
     return res.status(500).send({
        success:false,
        message:'Error In Get All Inventory',
        error
     })
  }
}
module.exports={createInventoryController,getinventoryController}