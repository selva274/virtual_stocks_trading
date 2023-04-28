const express=require('express')
const register_router=express.Router();
register_router.get('/',(req,res)=>{
    res.render('register')
});
module.exports=register_router;