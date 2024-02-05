const express=require('express');
const { testController } = require('../controllers/testController');

//router object 
const router=express.Router();

//router,testController is callback funcion
router.get('/',testController) 

module.exports=router;