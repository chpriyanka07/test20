const Admin = require('../model/admin.model');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
exports.signin = (request,response,next)=>{  
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.status(400).json({error: errors.array()});
   let admin = new Admin();
   admin.email = request.body.email;
   admin.password = request.body.password;
   admin.signin().then(result=>{
       console.log(result);
       if(result.length!=0){
        let payload = {subject: result[0].id};
        let token = jwt.sign(payload,'dffderecvxvvc'); 
        return response.status(200).json({response: JSON.parse(JSON.stringify(result[0])),token: token});
       }
       return response.status(404).json({error: "Invalid User"});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error'});
    });
}
exports.signup = (request,response,next)=>{
   let admin = new Admin();
   admin.email = request.body.email;
   admin.password = request.body.password;
   admin.save().then(result=>{
      if(result.affectedRows!=0){
          admin.getAdmin().then(result=>{
              //console.log(result);
              let adminObj = result[0];
              delete adminObj.password;
              return response.status(203).json(JSON.parse(JSON.stringify(result[0])));
            }).catch(err=>{
                console.log(err);
                return response.status(500).json({message: 'Internal Server Error'});
            });
      }
   }).catch(err=>{

   });   
}