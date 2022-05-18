const express  = require('express');
const app = express();
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
const indexRouter = require('./routes/index.route');
const bodyParser = require('body-parser'); 
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// client-request :- http://localhost:3000/signin

app.use("/",indexRouter);
app.use("/category",categoryRouter);
app.use("/product",productRouter);



app.listen(3000,()=>{
    console.log("Server Running..");
})