const express  = require('express');
const app = express();
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');

// http://localhost:3000/category
app.use("/category",categoryRouter);

// http://localhost:3000/product
app.use("/product",productRouter);

app.listen(3000,()=>{
    console.log("Server Running..");
})