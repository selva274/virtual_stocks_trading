const express=require('express');
const mongoose=require('mongoose')
const UserSchema=require('../models');	
const UserModel = mongoose.model('User', UserSchema);


const router=express.Router();
router.get('/',(req,res)=>[
    res.render('login')
])

router.post("/add_user",(req,res)=>{    
    async function run(){
		const newuser=new UserModel(req.body);
		await newuser.save();
	}
    run();
    res.redirect('/');
});

module.exports=router;