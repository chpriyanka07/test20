const express = require('express');
const app = express();
const indexRouter = require('./routes/index.route');
const adminRouter = require('./routes/admin.route');
const categoryRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');
const bodyParser = require('body-parser');
const session = require('express-session');
app.set("view engine","ejs");

app.use(bodyParser.json()); // json encoded data
app.use(bodyParser.urlencoded({extended: true})); // form url-encoded
app.use(session({secret: 'fdvxvdflkrereovccv'}));
app.use("/",indexRouter);
app.use("/product",productRouter);
app.use("/category",categoryRouter);
app.use("/admin",adminRouter);
//app.use("/authenticate",authenticateRouter);

app.listen(3000,()=>{
    console.log("Server Running....");
});