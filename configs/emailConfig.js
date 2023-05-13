
require("dotenv").config();
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "ritesh.dltouch.technologies@gmail.com",
        pass:"dltouchtechnologies",
    },
});


module.exports = transporter;
