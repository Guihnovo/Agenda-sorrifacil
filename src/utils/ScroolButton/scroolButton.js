import { CheckCircleOutlined, HomeOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import { Button } from './styled';
  
const ScrollButton = () => {
  
  // const [visible, setVisible] = useState(false)
  
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300){
  //     setVisible(true)
  //   } 
  //   else if (scrolled <= 300){
  //     setVisible(false)
  //   }
  // };
  
  const scrollToFooter = () =>{
    window.scrollTo({left: 0, top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  
  // window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button onClick={scrollToFooter}>
        <span>Conheça</span>
        <HomeOutlined  
            style={{   
            fontSize: '24px'}}>
            </HomeOutlined>
    </Button>
  );
}
{/* <HomeOutlined style={{fontSize: '20px', marginTop: '18px'}}/> */}


export default ScrollButton;