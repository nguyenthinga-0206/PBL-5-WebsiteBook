// import { createTransport } from "nodemailer";

// export default function GuiMail(){
//     const transporter = createTransport({
//         host: 'hostname',
//         port: 3000,
//         secure:false,
//         requireTLS:true,
//         // service: 'gmail',
//         auth: {
//           user: 'nga3421@gmail.com',
//           pass: '01659090719'
//         }
//       });
//       const mailOptions = {
//         from: 'nga3421@gmail.com',
//         to: 'nga152176@gmail.com',
//         subject: 'Sending Email using Node.js',
//         html: '<h1>Welcome</h1><p>That was easy!</p>'
//       }
//       transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//           console.log(error);
//         } 
//         else {
//           console.log('Email sent: ' + info.response);
//         }
//       })
// }