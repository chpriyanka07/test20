const express = require('express');
const { route } = require('./product.route');
const router = express.Router();

// http://localhost:3000/category
router.get("/",(request,response,next)=>{
   return response.send("Category Home Page");
});
// http://localhost:3000/category/add
router.post('/add',(request,response,next)=>{
   return response.send("Product Added...");
});
// http://localhost:3000/category/list
router.get("/list",(request,response,next)=>{
   return response.send("Category List Page");
});

// http://localhost:3000/category/delete/12
router.get("/delete/:id",(request,response,next)=>{
   return response.send("Category Deleted.....");
});

module.exports = router;