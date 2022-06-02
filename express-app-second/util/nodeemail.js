const nodemailer = require('nodemailer');
exports.sendEmail = (email,emailContent)=>{
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
        html: emailContent
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Inside email '+error);
        } else {
          console.log('Email sent: ');
        }
      });
}