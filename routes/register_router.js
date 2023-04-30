const express=require('express');


// const UserSchema=require('./models');	
// const UserModel = mongoose.model('User', UserSchema);

const register_router=express.Router();
register_router.get('/',(req,res)=>{
   
    // var newUser=new UserModel()
    res.render('register')

});

module.exports=register_router;