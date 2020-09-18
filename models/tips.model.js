const mongoose = require('mongoose')
const tipsSchema = new mongoose.Schema({
Crop:{
type: 'String',
trim:'true',
required:'the field must be filled'
},
Tips:{ 
type:'String',
trim:'true',
required:'the field cannot be empty'
},
Create_date:{
type:Date,
default:Date.now
}
})
mongoose.model('Tips',tipsSchema);