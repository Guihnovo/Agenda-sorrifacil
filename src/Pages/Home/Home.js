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
import aparelho_ortodontico from '../../Assets/aparelho_ortodontico.jpg'
import clareamento from '../../Assets/clareamento.jpg'
import limpeza from '../../Assets/limpeza_profilaxia.jpg'
import urgencia from '../../Assets/urgencia.jpg'
import harmonizacao from '../../Assets/harmonizacao.jpg'
import lentes_contato from '../../Assets/lentes_contato.jpg'
import avaliacao from '../../Assets/avaliacao.jpg'
import PhotosAlbum from './photos'

export default function HomeIcons (){

  

  return (
      <ContainerGrid>
        <ContainerTitulo>
          <h1>O que está incomodando você?</h1>
        </ContainerTitulo>
        {/* <Divider/> */}
        <ContainerCards>
          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={avaliacao} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={clareamento} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={limpeza} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={aparelho_ortodontico} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={urgencia} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={lentes_contato} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px',
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={harmonizacao} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px'
                        }}></img>
            </StyleLink>
          </Link>

          <Link to='/agenda' style={{height: '15px'}}>
            <StyleLink>
                    <img src={urgencia} style={{
                          display: 'flex',
                          width: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '67px',
                          border: '2px solid #FFFFFF',
                          borderRadius: '20px',
                        }}></img>
            </StyleLink>
          </Link>

          <ContainerFooter>
            <PhotosAlbum></PhotosAlbum>
        </ContainerFooter>

        </ContainerCards>
        
      </ContainerGrid>
      
  )}