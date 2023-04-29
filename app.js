const express=require('express');
const login_router=require('./routes/login_router');
const register_router=require('./routes/register_router');
const stock_router=require('./routes/stock_router');
const path=require('path');
const app=express();

app.use(express.static('stylesheet'));
app.set('view engine','ejs');



app.use('/',login_router);
app.use('/register',register_router);
app.use('/stocks',stock_router);

app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.listen(3000)  
