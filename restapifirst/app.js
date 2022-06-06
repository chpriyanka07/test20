const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/admin",adminRouter);

app.listen(3000,()=>{
    console.log("Server running..");
})