const mongoose = require('mongoose');
const farmersSchema = new mongoose.Schema({
   Name:{
       type: String,
       required:"name cannot be empty"
   },
   Email:{
       type:String,
       required:'email is required'
       
   },
   County:{
       type: String,
       required:'county cannot be empty',
       trim: true
      
   },
   Mobile:{
    type: String,
    required:'mobile number cannot be empty',
    trim: true
   
},
Location:{
    type: String,
    required:'provide your location please',
    trim: true
   
},
   Complaint:{
       type:String,
       trim: true,
       required:'Complaint field cannot be empty'
   },
   create_date:{
type:Date,
default:Date.now

   },
},{
   toObject:{
       virtuals:true,
   },
   toJSON:{
       virtuals:true,
   },
});
// email validation
farmersSchema.path('Email').validate((val)=>{
EmailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return EmailRegex.test(val)
},'invalid email');

mongoose.model('Farmers',farmersSchema);