const express=require('express');
const authMiddleware = require('../midllewares/authMiddleware');
const { createInventoryController, getinventoryController } = require('../controllers/inventoryController');
const router=express.Router();

//routes
//ADD INVENTORY || POST
router.post('/create-inventory',authMiddleware,createInventoryController)

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware,getinventoryController)
module.exports=router