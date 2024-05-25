const express=require('express')
const router = express.Router();
const {promptfunc} = require('../controllers/promptcontrollers.js')


router.get('/getPrompt',promptfunc)

module.exports=router;