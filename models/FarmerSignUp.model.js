const mongoose = require('mongoose')

const FarmerSignUpSchema = mongoose.Schema({
Name:{
      type:'String',
      trim:'true',
      required:true
},
Email:{
      type: String,
      trim:true,
      required:"the field cannot be empty"
},
Password:{
      required:true,
      type:String,
      trim: true
      
}

})
mongoose.model('FarmerSignUp',FarmerSignUpSchema);