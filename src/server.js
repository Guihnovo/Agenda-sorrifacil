// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const port = 3001;

// const app = express();
// app.use(bodyParser.json());

// // Rota para enviar o e-mail
// app.post('/send-email', async (req, res) => {
//   const { to, subject, text } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       // Configurações do serviço de e-mail
//       service: 'Gmail',
//       auth: {
//         user: 'guilhermenovo22@gmail.com', // Insira o seu endereço de e-mail aqui
//         pass: '6624050gg' // Insira a sua senha do e-mail aqui
//       }
//     });

//     const mailOptions = {
//       from: 'guilhermenovo22@gmail.com', // Insira o seu endereço de e-mail aqui
//       to,
//       subject,
//       text
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('E-mail enviado:', info);

//     res.send('E-mail enviado com sucesso');
//   } catch (error) {
//     console.error('Erro ao enviar o e-mail:', error);
//     res.status(500).send('Erro ao enviar o e-mail');
//   }
// });

// // Iniciar o servidor
// app.listen(port, () => {
//   console.log('Servidor rodando na porta 3001');
// });
