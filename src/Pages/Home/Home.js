import React, {useState} from 'react';
import { Button, DatePicker, Divider, Form, Input, InputNumber, Space } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { ContainerGrid, ContainerInput, ContainerName, ContainerTitulo, ContainerTimePicker,ContainerButtons, PhoneWhats, ContainerFooter, ContainerCards, ContainerLink, StyleLink } from './styled';
import locale from 'antd/es/date-picker/locale/pt_BR'
import { Field } from 'react-final-form';
import MaskInput from '../../Components/maskInput';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Agenda from '../../Assets/schedule.svg'

export default function HomeIcons (){

  

  return (
      <ContainerGrid>
        <ContainerTitulo>
          <h1>O que está incomodando você?</h1>
          
        </ContainerTitulo>
        {/* <Divider/> */}
        <ContainerCards>
            <ContainerLink>
                  <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#0091EF', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Avaliação de Implante</span>
                </Link>
                <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#E39300', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Consulta de rotina</span>
                    <div style={{display: 'flex', justifyContent: 'end', marginRight: '25px', marginTop: '10px'}}>
                      <img src={Agenda}></img>
                    </div>
                </Link>
            </ContainerLink>
            
            <ContainerLink>
              <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#0091EF', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Alinhador invisível <strong style={{color: '#555AA0'}}>Aligner</strong></span>
                </Link>
                <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#E39300', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Estou com dor</span>
                </Link>
            </ContainerLink>


            <ContainerLink>
              <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#0091EF', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Urgência</span>
                </Link>
                <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#E39300', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Tratamento rápido</span>
                </Link>
            </ContainerLink>

            <ContainerLink>
              <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#0091EF', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Aparelho ortodôntico</span>
                </Link>
                <Link to='/agenda' 
                      style={{
                        padding: '10px 0px 0px 15px', 
                        border: '1px solid black', 
                        borderRadius: '10%', 
                        height: '90px', 
                        border: '1px solid black', 
                        borderRadius: '35px 35px 35px 35px', 
                        boxShadow: '0px 0px 1px 0px black', 
                        background: '#E39300', 
                        color: '#FFFFFF',
                        width: '190px',
                        textAlign: 'start',
                        fontWeight: '700',
                        fontSize: '17px',
                    }}>
                    <span>Estou com dor</span>
                </Link>
            </ContainerLink>
           
        </ContainerCards>
        <ContainerFooter>
            <h4>SorriFácil</h4>
            <a> 
              Fotos
            </a>
        </ContainerFooter>
      </ContainerGrid>
      
  )}