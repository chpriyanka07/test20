const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');
const categoryRouter = require('./routes/category.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin",adminRouter);
app.use("/category",categoryRouter);

app.listen(3000,()=>{
    console.log("Server running..");
})