const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Customer=new Schema({
     firstname:String,
     lastname:String,
     email:String,
     password:String,
     cart:[
          {type: Schema.Types.ObjectId,ref: "Product",required: true},
          ],
     role:{ type: String, default: "customer" },
})
module.exports=mongoose.model('Customer',Customer);