const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth:{
    user:"alimagdi12367@gmail.com",
    pass:"aimorddjdtspxute"
}
})

exports.postContact = (req,res,next)=>{
    sendername = req.body.name;
    email = req.body.email;
    subject = req.body.subject
    message = req.body.message
    const mailOptions={
        from:"alimagdi12367@gmail.com",
        to:'alimagdi12367@gmail.com',
        html :`<h1>Contact </h1>
        <p> ${sendername}</p><br>
        <p>${email}</p><br>
        <p>${subject}</p><br>
        <p>${message}</p>
        `
      }
      return transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
          console.log(err)
        }else{
          console.log("Email Sent : " + info.response)
        }
        })
    res.redirect('/')


}

