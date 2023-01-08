import React from 'react';
import 'antd/dist/antd.css';
// import { Image } from 'antd';
import clinicaLado from '../../Assets/fotosClinica/clinicaLado.jpeg'
import consultorio from '../../Assets/fotosClinica/consultorio.jpeg'
import clinicaLonge from '../../Assets/fotosClinica/clinicaLonge.jpeg'
import lavatorio from '../../Assets/fotosClinica/lavatorio.jpeg'
import recepcao_secretaria from '../../Assets/fotosClinica/recepcao_secretaria.jpeg'
import recepcao from '../../Assets/fotosClinica/recepcao.jpeg'
import sala_espera from '../../Assets/fotosClinica/sala_espera.jpeg'
import video from '../../Assets/video_institucional.mp4'

// const PhotosAlbum = () => (
//   <Image.PreviewGroup>
//     <Image width={100} height={100} src={clinicaLado} />
//     <Image width={100} height={100} src={clinicaLonge} />
//     <Image width={100} height={100} src={consultorio} />
//     <Image width={100} height={100} src={lavatorio} />
//     <Image width={100} height={100} src={recepcao_secretaria} />
//     <Image width={100} height={100} src={recepcao} />
//     <Image width={100} height={100} src={sala_espera} />
//   </Image.PreviewGroup>
// );
// export default PhotosAlbum;

import { Button, InputNumber, Image } from 'antd';
import { useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';


const PhotosAlbum = () => {

  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);

  const images = [clinicaLado, clinicaLonge, consultorio, lavatorio, recepcao_secretaria, recepcao]

  return (
    <>
      {/* <div>
        scaleStep:{' '}
        <InputNumber
          min={0.1}
          max={5}
          defaultValue={0.5}
          step={0.1}
          onChange={(val) => setScaleStep(val)}
        />
      </div> */}
      
      {/* <Button type="primary" onClick={() => setVisible(true)}>
        Conheça a clínica
      </Button> */}
      <hr style={{border: '1px solid white'}}></hr>
      <HomeOutlined style={{fontSize: '20px', marginTop: '18px'}}/><h3 style={{fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: '1px', marginBottom: '12px', color: 'white'}}>Conheça a clínica</h3>
        <Image.PreviewGroup >
          <div style={{margin: '10px', padding: '10px', display: 'contents'}}>
              {/* <Image width={100} height={100} alt="clinica de lado" src={clinicaLado} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="clinica" src={clinicaLonge} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="consultorio" src={consultorio} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="lavatorio" src={lavatorio} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="recepcao secretaria" src={recepcao_secretaria} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="recepcao" src={recepcao} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="sala de espera" src={sala_espera} style={{border: '2px solid white'}}/>
              <Image width={100} height={100} alt="sala de espera" src={sala_espera} style={{border: '2px solid white'}}/> */}
              <video src={video} width="350" height="300" controls></video>
          </div>
          
        </Image.PreviewGroup>

      {/* {images.map((imageClinic) => 
        <Image
          width={200}
          style={{
            display: 'none',
          }}
        // src={imageClinic}
        preview={{
          visible,
          scaleStep,
          src: imageClinic,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
        />
     
      )} */}
      
    </>
  );
};
export default PhotosAlbum;