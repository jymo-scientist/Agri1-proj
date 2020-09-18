const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const  Tips = mongoose.model('Tips');
router.get('/',(req,res)=>{
      res.render('Tips/tips',{
      ViewTitle:"AddTips"
      })
      router.post('/',(req,res)=>{
           console.log(req.body)
            insertTip(req,res)
      })
      function insertTip(req,res){
            const tips = new Tips({
                  _id:req.params.id,
                  Crop: req.body.Crop,
                  Tips:req.body.Tips
            });
            tips.save((err,doc)=>{
            if(!err)
                   res.render('./tips/tips'); 
                  else{
                      if(err.name == 'ValidationError');
                         handleValidationError(err,req.body);
                          res.render('Tips/tips',{
                              ViewTitle:"Insert  a tip",
                              tips: req.body
                              });
                           console.log('Errr occured during insersion'+err);
                          }
                    });
                  }
        router.get('./tips/list',(req,res)=>{
Tips.findOne({},(docs,error)=>{
     if(!error){
           res.render("tips/list",{
                 lists:docs
           })
     }else{
           console.log("error occured when retriving tips"+error)
     }
})
  })
function handleValidationError(err,body){
                        for(fields in err.errors){
                              switch(err.errors[fields].path){

                              case 'Crop':
                             body['CropError']=err.errors[fields].message;
                             case 'Tips':
                                   body['TipsError'] = err.errors[fields].message;
                        }
                   }
            }
})
module.exports = router