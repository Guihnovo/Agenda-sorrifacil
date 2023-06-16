import React, {useState} from 'react';
import { Alert, Button, Divider, Form, Input, InputNumber, message, Space } from 'antd';
import { TimePicker } from 'antd';
import { ContainerGrid, ContainerInput, ContainerName, ContainerTitulo, ContainerTimePicker,ContainerButtons, PhoneWhats, ContainerFooter, ImageFooterCss } from './styled';
import locale from 'antd/es/date-picker/locale/pt_BR'
import { Field } from 'react-final-form';
import MaskInput from '../../Components/maskInput';
import { LinkOutlined, PhoneOutlined, SmileFilled, SmileOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import symbol from '../../Assets/symbol.webp';
import emailJs from '@emailjs/browser';
import ConfirmationModal from './Confirmation_modal/confirmationModal';
import Mapa from '../../Components/Mapa/Mapa';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
// import { format } from 'date-fns';
import './form.css';
import moment from 'moment';
import ReactInputMask from 'react-input-mask';
// import MapaSorrifacil from '../../Components/Mapa/Mapa-react-map';
import maps_sorrifacil from '../../Assets/maps-sorrifacil.png'
import Paragraph from 'antd/lib/skeleton/Paragraph';

export default function HomeSchedule (){

  const location = useLocation();

  const [locationState, setLocationState] = useState({});
  const [value, setValue] = useState(null);

  useEffect(() => {
    setLocationState(location.state)
  }, [location]);

  const validatePhone = (value) => {
    if (!value) {
      return "Required";
    } else if (
      !/^(\+7)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/i.test(
        value
      )
    ) {
      return "Digite todos os números";
    }
    return undefined;
  };

  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  registerLocale('pt', pt);

  const handlePhone = (phone) => {
    if(phone.length < 12){
      setIsPhoneInvalid(true)
    }else{
      setPhone(phone);
    }
  }

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    const selectedHour = parseInt(selectedTime.split(":")[0]);
    //const selectedMinutes = parseInt(selectedTime.split(":")[1]);

    // console.log("Select hours", selectedHour)

    if (selectedHour < 8 || selectedHour > 18) {
      event.preventDefault();
      message.config({
        duration: 6,
      })
      message.warning(
        'Atendimento das 8h às 19h. Em caso de emergência, entre em contato pelos nossos canais de comunicação.'
        );
    } else {
      setTime(selectedTime);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isSunday = (date) => {
    return date.getDay() === 0;
  };

  const filterWeekends = (date) => {
    return !isSunday(date);
  };

  const formattedDate = selectedDate.toLocaleDateString("pt-BR");

  const payload = {
    from_name: name,
    phone: phone,
    date: formattedDate,
    time: time,
    treatment: locationState,
  }

  function sendToEmail(){

    // const templateParams = {
    //   from_name: name,
    //   phone: phone,
    //   date: date,
    //   time: time
    // }

    // emailJs.send('service_dp069rj', 'template_n64evi8', templateParams, 'oL-Id4RZt0lRfyPOW').then((response) => {
    //   console.log('Email enviado', response.status, response.text)
    // }, (error) => {
    //   console.log('ERROR', error)
    // })
    setStatus(true);

  }

  return (
      <ContainerGrid>
        <ContainerTitulo>
          <h1>Agende online sua avaliação:</h1>
        </ContainerTitulo>
        
        <ContainerInput>
        <Divider style={{color: '#FFFFFF'}}/>
            <ContainerName>
                <h3>Nome</h3>
                <Input
                  type="text"
                  placeholder="Digite seu nome" 
                  size='large' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required={true}
                  autoFocus
              />
            </ContainerName>
            <ContainerName>
                <h3>Telefone</h3>
                <ReactInputMask 
                  mask="(99) 99999-9999" 
                  type="tel" 
                  required 
                  value={phone} 
                  onChange={(e) => handlePhone(e.target.value)}
                  placeholder="digite seu número"
                  style={{width: '180px', height: "40px", border: '4px solid whitesmoke'}}
                  className={isPhoneInvalid ? 'is-invalid' : ''}
                />
            </ContainerName>
            <ContainerTimePicker>
                <h3>Escolha sua data e horário:</h3>
                
                <Space>
                  <div className="containerPicker">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange} 
                      filterDate={filterWeekends}
                      dateFormat="dd/MM/yyyy"
                      locale="pt"
                      inputMode="none"
                      minDate={moment().toDate()}

                    />
                  </div>
                    <input
                      type="time"
                      id="time-input"
                      value={time}
                      style={{width: '120px', height: "40px",bordeRadius: '4px'}}
                      onChange={handleTimeChange}
                      inputMode="none"
                    />
                    
                </Space>
            </ContainerTimePicker>
          </ContainerInput>
          <ContainerButtons>
            {/* <Button type="primary" style={{marginTop: '40px', fontWeight: 700}} onClick={() => sendToEmail()}>Enviar agendamento</Button> */}
            {/* <a href="tel:+44998010400" target='_blank'>conversar no whatsaap.</a> */}
            <ConfirmationModal payload={payload}/>
            <PhoneWhats>
              <span style={{marginBottom: '5px',fontSize: '12px'}}>Entre em contato:</span>
              <div>
                <a href="tel:4430202300" target='_blank'>
                  <PhoneOutlined style={{color: 'blue', fontSize:'32px', marginRight: '40px', transform: 'rotate(90deg)'}}/>
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=554498010400&text=Olá. Gostaria de.." 
                  target="_blank" rel="noreferrer noopener">
                    <WhatsAppOutlined style={{color: 'green', fontSize:'32px', boxShadow: "0px 0px 10px 4px",
                     borderRadius: "50%", color: "#2cdb2c"}}/>
                </a>
              </div>
            </PhoneWhats>
            
        </ContainerButtons>
        <ContainerFooter>
            {/* <Mapa/> */}
            <a 
              target='_blank' 
              href="https://www.google.com/maps/place/Sorrifácil+Maringá+Souza+Naves/@-23.427073,-51.9145181,17z/data=!3m1!4b1!4m5!3m4!1s0x94ecd1ae7d2b8291:0x9ea7e9e0ec36a2a3!8m2!3d-23.4271074!4d-51.9122989">
              <ImageFooterCss src={maps_sorrifacil}/>
                <h6>Venha conhecer a clínica</h6>
                <span style={{letterSpacing: '1px', color: 'white', bottom: '8px', position: 'inherit'}}>Praça Sen. Abilon de <strong>Souza Naves</strong>, 364 - Zona 8, Maringá - PR</span>
                
            </a> 
                {/* <img style={{width: '145px', height: '41px', marginBottom: '10px'}} src={symbol}></img> */}
            </ContainerFooter>
      </ContainerGrid>
      
  )}

  