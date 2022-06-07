const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response,next)=>{
  try{
    let token = request.headers.authorization;
    jwt.verify(token,'dffderecvxvvc');
    next();
  }
  catch(err){
    return response.status(403).json({error: 'Unauthorized request..'});
  }    
}