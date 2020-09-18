require('../models/db');
const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Farmers = mongoose.model('Farmers');

//var Farmers = require('/models/Farmers')
 router.get('/',(req,res)=>{
     res.render('Farmers/farmers',{
     ViewTitle:"Insert a farmer"
     });
    
     router.post('/',(req,res)=>{ 
       console.log(req.body)
        insertRecord(req,res);
        });
        function insertRecord(req,res){
            //create an object of the schema
const farmers = new Farmers();
farmers.Name = req.body.Name;
farmers.Email = req.body.Email;
farmers.Mobile = req.body.Mobile;
farmers.Location = req.body.Location;
farmers.County= req.body.County;
farmers.Complaint =req.body.Complaint;
farmers.save((err,doc)=>{
    if(!err)
    res.send('Thank you for submitting your complaint'
    );
    else{
        if(err.name == 'ValidationError');
            handleValidationError(err,req.body);
            res.render('Farmers/farmers',{
                ViewTitle:"Insert a farmer",
                Farmers: req.body
                });
             console.log('errr occured during insersion'+err);
 }
});
}
router.get('/list',(req,res)=>{
    Farmers.findOne({},
 (err,docs)=>{
if(!err)
{
    console.log(docs)
   res.render("Farmers/list",{            
    list:docs
});
}else{
    console.log('Error in retrieving farmers complaint'+ err)
}
})
    }); 
function handleValidationError(err,body){
    for(fields in err.errors){
        switch(err.errors[fields].path){
case 'Name':
   body['NameError']=err.errors[fields].message;
break;
case 'Email':
   body['EmailError']=err.errors[fields].message;
break;
case 'Mobile':
   body['MobileError']=err.errors[fields].message;
break;
case 'Location':
   body['LocationError']=err.errors[fields].message;
break;
case 'County':
   body['CountyError']=err.errors[fields].message;
break;
case 'Complaint':
   body['ComplaintError']=err.errors[fields].message;
break;
default:
   break;
        }
    }
}
});
 module.exports = router;
 