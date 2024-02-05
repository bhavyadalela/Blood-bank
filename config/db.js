const mongoose=require('mongoose')

const connectDB= async()=>{
     try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log(`connect to Mongodb Database ${mongoose.connection.host}`)//host function tells us ki normal database hai ya cloud database hai
     }
     catch(error){
       console.log(`Mongo database Eroor ${Error}`)
     }

};
module.exports=connectDB;