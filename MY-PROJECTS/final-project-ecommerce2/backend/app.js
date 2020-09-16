const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const farmerRoute=require('./routes/farmer.router');
//const productRoute=require('./routes/product.router');
const customerRoute=require('./routes/customer.router');
const superuserRoute=require('./routes/superuser.router');
const orderRoute=require('./routes/order.router');
const cartRoute=require('./routes/cart.router');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb',parameterLimit: 100000,extended : true}))
app.use(farmerRoute);
//app.use(productRoute);
app.use(customerRoute);
app.use(superuserRoute);
app.use(orderRoute);
app.use(cartRoute);
mongoose.connect('mongodb://localhost:27017/localFarmers', {useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
  app.listen(7000,()=>{
    console.log('server running on 7000')
  })
}).catch(err=>console.log(err));