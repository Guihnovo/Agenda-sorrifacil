// import React from 'react'
// import { useState } from 'react';
// const nodemailer = require('nodemailer');


// // Configurações de transporte para o serviço de e-mail
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'guilhermenovo22@gmail.com',
//     pass: ''
//   }
// });
// const sendEmail = (to, subject, text) => {
//   return new Promise((resolve, reject) => {
//     const mailOptions = {
//       from: 'guilherme.novo22@gmail.com',
//       to: 'guilherme.novo22@gmail.com',
//       subject,
//       text: 'teste'
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(info.response);
//       }
//     });
//   });
// };
// module.exports = { sendEmail };