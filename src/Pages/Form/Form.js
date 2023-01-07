import React, {useState} from 'react';
import { Button, DatePicker, Divider, Form, Input, InputNumber, Space } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { ContainerGrid, ContainerInput, ContainerName, ContainerTitulo, ContainerTimePicker,ContainerButtons, PhoneWhats, ContainerFooter } from './styled';
import locale from 'antd/es/date-picker/locale/pt_BR'
import { Field } from 'react-final-form';
import MaskInput from '../../Components/maskInput';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function HomeSchedule (){

  const [value, setValue] = useState(null);
  const onChange = (time) => {
    moment().format('L')
    setValue(time);
  };

  console.log(value)
  
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

  return (
      <ContainerGrid>
        <ContainerTitulo>
          <h1>Agende aqui:</h1>
        </ContainerTitulo>
        <ContainerInput>
        <Divider style={{color: '#FFFFFF'}}/>

            <ContainerName>
                <h3>Nome</h3>
                <Input placeholder="Digite seu nome" size='large'/>
            </ContainerName>
            <ContainerName>
                <h3>Telefone</h3>
                <Input placeholder="Digite seu telefone" size='large'/>
            </ContainerName>
            <ContainerTimePicker>
                <h3>Escolha sua data e horário:</h3>
                <Space>
                    <DatePicker locale={locale} format='DD-MM-YYYY' size='large'/>
                    <TimePicker value={value} onChange={onChange} format='HH:mm' locale={locale} size='large' style={{width: '140px'}}/>
                </Space>
            </ContainerTimePicker>
        </ContainerInput>
        <ContainerButtons>
            <Button type="primary" style={{marginTop: '40px', fontWeight: 700}}>Enviar agendamento</Button>
            {/* <a href="tel:+44998010400" target='_blank'>conversar no whatsaap.</a> */}
            
            <PhoneWhats>
              <span style={{marginBottom: '5px',fontSize: '12px'}}>Entre em contato:</span>
              <div>
                <a href="tel:+44998010400" target='_blank'><PhoneOutlined style={{color: 'blue', fontSize:'32px', marginRight: '40px'}}/></a>
                <a 
                  href="https://api.whatsapp.com/send?phone=554498010400&text=Olá. Gostaria de.." 
                  target="_blank" rel="noreferrer noopener">
                    <WhatsAppOutlined style={{color: 'green', fontSize:'32px'}}/>
                </a>
              </div>
            </PhoneWhats>
            
        </ContainerButtons>
        <ContainerFooter>
            <h4>SorriFácil</h4>
            <a 
              target='_blank' 
              href="https://www.google.com/maps/place/Sorrifácil+Maringá+Souza+Naves/@-23.427073,-51.9145181,17z/data=!3m1!4b1!4m5!3m4!1s0x94ecd1ae7d2b8291:0x9ea7e9e0ec36a2a3!8m2!3d-23.4271074!4d-51.9122989">
                Praça Sen. Abilon de <strong>Souza Naves</strong>, 364 - Zona 8, Maringá - PR
            </a>
        </ContainerFooter>
      </ContainerGrid>
      
  )}