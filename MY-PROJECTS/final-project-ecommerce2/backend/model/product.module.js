const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Product= new Schema({
   productType:String,
   productName:String,
   price:Number,
   quantity:Number,
   image:String,
   detail:String
     }
);
module.exports=mongoose.model('Product',Product);