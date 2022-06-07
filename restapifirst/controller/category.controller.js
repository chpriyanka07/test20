const Category = require('../model/category.model');
exports.deleteCategory = (request,response,next)=>{
    let id = request.params.id;
    if(isNaN(id))
     return response.status(400).json({error: 'Bad request'});
    Category.deleteCategory(id).then(result=>{
        console.log(result);
        if(result.affectedRows!=0)
          return response.status(202).json({message: 'Deleted..'});
        return response.status(404).json({error: 'Requested Resouce Not Found'});  
    }).catch(err=>{
        return response.status(500).json({error: 'Internal server error'})
;    });   
}
exports.getCategoryList = (request,response,next)=>{
  
  Category.getCategoryList().then(result=>{
      return response.status(200).json(JSON.parse(JSON.stringify(result)));
  }).catch(err=>{
      return response.status(500).json({error: 'Internal Server Error'})
  });
}
