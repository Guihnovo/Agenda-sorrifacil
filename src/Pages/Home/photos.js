import React from 'react';
import 'antd/dist/antd.css';
// import { Image } from 'antd';
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
              <video src={video} width="350" height="300" controls style={{borderRadius: "28px"}}></video>
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