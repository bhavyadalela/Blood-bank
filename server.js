const express=require('express')
const dotenv=require('dotenv').config();
const colors=require('colors');
const morgan=require('morgan')
const cors=require('cors');
const connectDB = require('./config/db');

//rest object
const app=express();

connectDB()

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))


app.use('/api/v1/test',require('./routes/testRoutes'))
app.use('/api/v1/auth',require('./routes/authRouter'))
const Port=process.env.PORT || 3000;


app.listen(Port,()=>{
    console.log(`Node server Running in ${process.env.DEV_MODE}on ${process.env.PORT}`.bgBlue.white)
})