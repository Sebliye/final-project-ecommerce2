const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Farmer = new Schema(
     {
     businessName:String,
     email:String,
     password:String,
     products:[
          {type: Schema.Types.ObjectId,ref: "Product",required: true},
          ],
     rate:Number,
     }
);

module.exports=mongoose.model('Farmer',Farmer);