const express = require('express');
const app = express();
const db = require('./util/dbconfig');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/employee/create",(request,response)=>{
   // request.body-->{name:'abc',salary:60000,ageL30,skill:'angular'} 
   console.log(request.body);
   db.collection('employee').insert(request.body,(err,result)=>{
     if(err)
       return response.status(500).json({error: 'Internal server error'});
     return response.status(201).json(result);  
   });
});

app.listen(3000,()=>{
    console.log('Server is running...');
})