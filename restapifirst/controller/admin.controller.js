const Admin = require('../model/admin.model');
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