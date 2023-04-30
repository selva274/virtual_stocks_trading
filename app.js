const express=require('express');
const login_router=require('./routes/login_router');
const register_router=require('./routes/register_router');
const stock_router=require('./routes/stock_router');
const path=require('path');
const isLoggedIn=require('./isLoggedIn');
const passport = require('passport');
var bodyParser = require('body-parser')

const userModel = require("./models");
const google_schema=require('./google_model');

const cookieSession = require('cookie-session');
require('./passport-setup');
const app=express();
app.use(express.json());

app.use(express.static('stylesheet'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}))

//database
const mongoose = require("mongoose");
const server=require("./server");
const UserSchema=require('./models');	
const { error } = require('console');
const GoogleModel = mongoose.model('google', google_schema);
const UserModel = mongoose.model('User', UserSchema);






app.use(cookieSession({
	name: 'google-auth-session',
	keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());


// Auth
app.get('/google' , passport.authenticate('google', { scope:
	[ 'profile', 'email' ]
}));

// Auth Callback
app.get( '/google/callback',
	passport.authenticate( 'google', {
		
		failureRedirect: '/failure'}),function (req,res) {
			res.redirect("/success")
		}
);

// Success
app.get('/success' , (req , res) => {

	
	async function run(){
		const newuser=new GoogleModel({email:`${req.user.email}`});
		await newuser.save();
	}
    run();

	res.redirect("/home")
});

// failure
app.get('/failure' , (req , res) => {
	res.send("<h1>404 Error</h1>");
})

app.use('/',login_router);
app.use('/register',register_router);
app.use('/stocks',stock_router);


app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
let user_email;
let user_password;
let auth_paasword;

app.post("/home",async(req,res)=>{
	user_email=req.body.email;
	user_password=req.body.password;
	const docs = await UserModel.find({email:user_email });
	auth_paasword=docs.map(doc => doc.password).sort()[0];
	if(user_password==auth_paasword){
		res.redirect('/home');
	}else{
		res.redirect('/')
	}
	  });

app.get(("/home"),(req,res)=>[
	res.render("home")
])






app.listen(3000,(req,res)=>{
    console.log("server connected!...")
}) 

module.exports = app;