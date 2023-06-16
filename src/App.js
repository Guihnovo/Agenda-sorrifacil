import React, {useState} from 'react';
import { Button, DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';
import './App.css';
import moment from 'moment';
import Home from './Pages/Form/Form';
import HomeIcons from './Pages/Home/Home';
import Router from './Router/router';

export default function App (){

  const [value, setValue] = useState(null);
  const onChange = (time) => {
    moment().format('L')
    setValue(time);
  };
  return (
    <div className="App">
      {/* <Home/> */}
      <Router/>
    </div>
  )}