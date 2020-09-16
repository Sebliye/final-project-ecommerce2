const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Order = new Schema(
   {
     farmerId: {type: Schema.Types.ObjectId,ref: "Farmer",required: true},
     curomerId:{type: Schema.Types.ObjectId,ref: "Customer",required: true},
     date:Date,
     status:{type:String,default:"pending"}
   }
);


module.exports=mongoose.model('Order',Order);