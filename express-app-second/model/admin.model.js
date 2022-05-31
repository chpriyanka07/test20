const pool = require('../util/dbconfig');
module.exports = class Admin{
    constructor(id,email,password,status){
        this.id = id;
        this.email = email;
        this.password = password;
        this.status = status;
    }

    signupAdmin(){
      return new Promise((resolve,reject)=>{
          // Write Databse code here....
      });
    }
}