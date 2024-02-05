const userModel = require("../models/userModel");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const registerController=async(req,res)=>{
      try{
         const existingUser=await userModel.findOne({email:req.body.email})
         if(existingUser){
            return res.status(200).send({
                success:false,
                message:'User already existes'
            })
         }
         const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hash(req.body.password,salt)
         req.body.password=hashedPassword;
         const user=new userModel(req.body)
         await user.save();
         return res.status(201).send({
            success:true,
            message:"User Registered Succesfully",
            user,
    
         })
      }
      catch(error){
      console.log(error)
        res.status(500).send({
            sucess:false,
            message:'Error in Register API',
            error
        })
      }
 };

 const  loginController=async(req,res)=>{
     try{
        const user=await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User not found'
            })
        }
        const comparePassword=await bcrypt.compare(req.body.password,user.password)
        if(!comparePassword){
            return res.status(500).send({
                success:false,
                message:'Invalid Credentials'
            })
        }
        //sign method is used to encrypt the token
        // creating token, on basis of userId ,process.env.jwt is the secret key
        const token=jwt.sign({userId:user._id},process.env.JWT_KEY,{expiresIn:'1d'})
        return res.status(200).send({
            success:true,
            message:'Login Successfully',
            token,
            user
        })
     }
     catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in LoginAPI',
            error

        })

     }
 }
 module.exports={registerController,loginController}