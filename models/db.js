
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/project1',{ useUnifiedTopology: true,useNewUrlParser:true },(err,database)=>{
    if(!err){
        console.log("connection to database is successful")
        db =database;
    }
    else{
        console.log('eror occured in db conneection!!!'+ err);   
    }
    db.close();
});
require('./Farmers.model')
require('./Registers.model') 
require('./tips.model')
// require('./FarmerSignUp.model')