import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import StopWatch from './components/StopWatch';
import List from './components/List';
import Bordered from './components/Bordered';
import DeepTree from './components/DeepTree';

function App(props) {
  return (
    <>
      <DeepTree />
    </>
  );
}

export default App;

/*
  Створити компонент Bordered
    задача компонента - прийняти якісь інші 
    компоненти / елементи як children
    та відмалювати їх у діві, я у якого 
    задан бордер і паддінги
*/

<Avatar src="sadsdsadsa"/>

function Avatar ({src, alt}) {
  return <img src={src} alt={alt}/>
}

<GuestAvatar />

// function GuestAvatar ({ alt}) {
//   return <img src={'gefaultPicsrc.jpg'} alt={alt}/>
// }

function GuestAvatar ({ alt}) {
  return <Avatar src={'gefaultPicsrc.jpg'} alt={alt}/>
}
