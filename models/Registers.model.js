const mongoose = require('mongoose');
const registersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:"the field is required"
    },
    secondName:{
        type:String,   
    },
    RegNumber:{
        type:String,
        required:"the field is required"
    },
    Email:{
        type:String,
        required:"the field is required"
    },
    Password:{
        type:String,
        required:"the field is required"
    }, 
create_date :{
        type:Date,
    default:Date.now   
    }
    
});
// email validation
registersSchema.path('Email').validate((val)=>{
EmailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return EmailRegex.test(val)
},'invalid email')
mongoose.model('Registers',registersSchema)