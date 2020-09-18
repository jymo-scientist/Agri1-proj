const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Registers = mongoose.model('Registers');

router.get('/',(req,res)=>{
      res.render('Registers/registers',{
      ViewTitle:"Extension Officer SignUp"
      });
      router.post('/registers',(req,res)=>{ 
        console.log(req.body)
       insertNewRegister(req,res);
         });
         function insertNewRegister(req,res){
 const registers = new Registers();
 registers.firstName = req.body.firstName;
 registers.secondName = req.body.secondName;
 registers.RegNumber= req.body.RegNumber;
 registers.Email = req.body.Email;
 registers.Password= req.body.Password;
 registers.save((err,doc)=>{
     if(!err){
         res.redirect('./Registers/registers');
     }else{
         if(err == 'ValidationError'){
             handleValidationError(err,req.body);
             res.render('Registers/registered_farmer',{
                 ViewTitle:"Insert a farmer",
                 registered_farmer: req.body
                 });
             
         }else
         console.log('errr occured during insersion'+err);
     }
 });
 }
 router.get('/registerd_farmer',(req,res)=>{
     res.json("you have created new record")
     });
 
  });
  function handleValidationError(err,body){
      for(fields in err.error){
          switch(err.errors[fields].path){
 case 'fastName':
     body['fastNameError']=err.errors[fields].message;
 break;
 case 'Email':
     body['EmailError']=err.errors[fields].message;
 break;
 case 'secondName':
     body['secondNameError']=err.errors[fields].message;
 break;
 case 'RegNumber':
     body['RegNumberError']=err.errors[fields].message;
 break;
 case 'password':
     body['PasswordError']=err.errors[fields].message;
 break;
 default:
     break;
          }
      }
  }
  module.exports = router;
