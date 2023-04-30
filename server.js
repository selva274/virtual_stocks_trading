const mongoose=require('mongoose');
const server=mongoose.connect(
  "mongodb+srv://selvakumard274:tradedb123@tradedb.e1telah.mongodb.net/trade_data?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }
).then(()=>{
	console.log("Connected Mongo DB!....")
}).catch((e)=>{
	console.log(e);
})

module.exports=server;