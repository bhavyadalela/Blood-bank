const express=require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../midllewares/authMiddleware');

const router=express.Router();

//Register|| POST
router.post('/register',registerController);

//LOGIN || POST
router.post("/login",loginController);

 router.get('/current-user',authMiddleware,currentUserController)
module.exports=router