const nodemailer = require("nodemailer")


exports.transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASS
    }
  })
  