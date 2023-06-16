import React, {useEffect, useState} from 'react';
import { Spin } from 'antd';
import { ContainerGrid, ContainerInput, ContainerName, ContainerTitulo, ContainerTimePicker,ContainerButtons, PhoneWhats, ContainerFooter, ContainerCards, ContainerLink, StyleLink, Image } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import PhotosAlbum from './photos'
import symbol from '../../Assets/symbol.webp';
import symbolRead from '../../Assets/symbol_read.webp';
import { allActions } from './data/data'
import ScrollButton from '../../utils/ScroolButton/scroolButton';

export default function HomeIcons (){

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  // function handleWithTypeAction(action){
  //   setLoading(true);
  //   navigate("/agenda", {
  //     state: action
  //   })
  //   setLoading(false);
  // }

  const handleWithTypeAction = (action) => {
    setLoading(true);
    navigate('/agenda', {
      state: action
    })
      .then(() => {
        // Navegação concluída com sucesso
      })
      .catch((error) => {
        // Tratar erros na navegação
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true)
  //   }, 3000);
  // }, [])

  return (
      <ContainerGrid>
        <Spin spinning={loading} delay={1000} size="large" style={{display: "flex", justifyContent: "center"}}>
          <div>
        <ContainerTitulo>
          <img src={symbol} alt='símbolo sorrifacil maringá souza naves' style={{boxShadow: '1px 1px 17px 1px white', borderRadius: '50%'}}></img>
          {/* <h4>Agende seu horário com rapidez e facilidade.</h4> */}
          <h4>Transforme seu sorriso hoje mesmo!</h4>
          {/* Descubra o poder da odontologia moderna na nossa clínica. */}
          <span>Os melhores dentistas estão aqui na</span>
          <img style={{width: '145px', height: '41px', marginBottom: '10px'}} 
            src={symbolRead} 
            alt='símbolo sorrifacil maringá souza naves'
          >
          </img>
        </ContainerTitulo>
        <ContainerCards>
            <div style={{display: "flex", justifyContent: "end", marginLeft: "55%", fontSize: "14px"}}>
              {/* <button>Conheça a cliníca

              </button> */}

              <ScrollButton/>
            </div>
            {/* {loadingWindow && <div>Carregando..</div>} */}
            {/* {allActions.map((action) => */}
            {allActions.map((action) => 

            <button key={action.actions} onClick={() => handleWithTypeAction(action.actions)} 
              style={{display: 'contents', borderRadius: "20px" }}
              >
              <Image
                src={action.image}>
              </Image>
            </button>
            )}
          <ContainerFooter>
            <PhotosAlbum></PhotosAlbum>
          </ContainerFooter>
            
        </ContainerCards>
        </div>
        </Spin>
      </ContainerGrid>
      
  )}