const express=require('express');
const stock_router=express.Router();

stock_router.get('/apple',(req,res)=>{
    res.render('apple');
});
stock_router.get('/google',(req,res)=>{
    res.render('google');
});
stock_router.get('/microsoft',(req,res)=>{
    res.render('microsoft');
});
stock_router.get('/tesla',(req,res)=>{
    res.render('tesla');
});
stock_router.get('/bitcoin',(req,res)=>{
    res.render('bitcoin');
});
stock_router.get('/ethereum',(req,res)=>{
    res.render('ethereum');
});
stock_router.get('/walmart',(req,res)=>{
    res.render('walmart');
});
stock_router.get('/alphabet',(req,res)=>{
    res.render('alphabet');
});
stock_router.get('/amazon',(req,res)=>{
    res.render('amazon');
});
stock_router.get('/nvidia',(req,res)=>{
    res.render('nvidia');
});
stock_router.get('/intel',(req,res)=>{
    res.render('intel');
});
module.exports=stock_router;