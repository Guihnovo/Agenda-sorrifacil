import React from 'react';
import { HeartFilled, ScheduleOutlined } from '@ant-design/icons';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import formatDate from '../../../utils/formatDate';
import './confirmation.css';
import axios from 'axios';
import emailJs from '@emailjs/browser';

// module.exports = { sendEmail };

const ConfirmationModal = ({payload}) => {
  
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [alertPhone, setAlertPhone] = useState(false);
 
  const emailKey = process.env.KEY_EMAIL;

  const showModal = () => {

    if(Object.values(payload).length < 3){
        setOpen(false);
        setConfirmation(true);
    }else{
      setOpen(true);
      setConfirmation(false);
    }
  };

  const handleOk = () => {
    // setModalText('Agendamento enviado. Agradecemos o seu contato');
    setModalText(true)
    setConfirmLoading(true);
    setTimeout(() => { 
      setOpen(false);
      sendEmail();
      setConfirmLoading(false);
    }, 6000);
  };

  const handleCancel = () => {
    setModalText(false)
    setOpen(false);
  };

  function validateField(){
    return payload.from_name && payload.phone && payload.date && payload.time;
  }
  
  async function sendEmail(){
    
    const templateParams = {
      from_name: payload.from_name,
      phone: payload.phone,
      date: payload.date,
      time: payload.time,
      treatment: payload.treatment
    }

    emailJs.send('service_dp069rj', 'template_n64evi8', templateParams, emailKey).then((response) => {
    }, (error) => {
      message.config({
        duration: 4,
      })
      message.error(
        'Aconteceu algo errado. Tente enviar novamente'
        );
    })
  }

  return (
    <>
      <Button 
        type="primary" 
        size="large"
        onClick={showModal} 
        disabled={!validateField()} 
        style={{marginTop: "1rem", color: "black", fontWeight: 700, letterSpacing: "2px"}}
        
      >
        Agendar
        <ScheduleOutlined style={{fontSize: "18px", color: 'green'}}/>    
        </Button>
      {!validateField() 
        ? 
          <p 
          style={{
            color:"red", 
            fontSize: "12px", 
            display: "flex", 
            justifyContent: "end",
            fontWeight: 700,
            letterSpacing: "1px"}}
          >Insira os campos p/ prosseguir</p> 
          : 
          null
      }
      <Modal
        title="Suas informações de agendamento:"
        open={open}
        okText="Enviar agendamento :)"
        onOk={() => handleOk()}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        onClick={() => sendEmail()}
        style={{color: 'white', fontSize: '24px', backgroundColor: 'green', fontWeight: 700}}
      >
        <p>
            {/* {modalText} */}
            {modalText && 
              <div style={{background: "cornflowerblue", padding: "8px", borderRadius: "8px", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))"}}>
                <HeartFilled 
                  style={{
                    color: "red", 
                    fontSize: "36px", 
                    display: "flex", 
                    justifyContent: "center",
                    margin: "8px"
                  }}
                />
                <h3 style={{fontWeight: 700, textAlign: "center", color: "white"}}>Agendamento enviado. Agradecemos o seu contato</h3>
              </div>
            }
        </p>
            <table className="tabela-consultorio">
              <tbody>
                <tr>
                  <th className="titulo">Nome</th>
                  <td>{payload.from_name}</td>
                </tr>
                <tr>
                  <th className="titulo">Telefone</th>
                  <td>{payload.phone}</td>
                </tr>
                <tr>
                  <th className="titulo">Data e horário</th>
                  <td style={{
                    background: 'orange', 
                    boxShadow: '1px 1px 1px 1px black', 
                    fontWeight: 600,
                    border: '1px solid black'
                  }}>{`${payload.date} às ${payload.time}`}</td>
                </tr>
                <tr>
                  <th className="titulo">Tratamento</th>
                  <td>{payload.treatment}</td>
                </tr>
              </tbody>
            </table>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
