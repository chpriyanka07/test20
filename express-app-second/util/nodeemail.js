const nodemailer = require('nodemailer');
exports.sendEmail = (email)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bees58268@gmail.com',
          pass: '1122337866'
        }
      });
      
      var mailOptions = {
        from: 'bees58268@gmail.com',
        to: email,
        subject: 'Welcome',
        html: '<h1>Welcome '+email+'</h1>'+
        '<p>Thanks to visit us. Please click on below link to verify account</p>'+
        '<p><a href="http://localhost:3000/admin/verify?email='+email+'">Verify account</a></p>'+
        '<h3>Thanks and Regards</h3>'+
        '<h5>Team Book Inventory</h5>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Inside email '+error);
        } else {
          console.log('Email sent: ');
        }
      });
}