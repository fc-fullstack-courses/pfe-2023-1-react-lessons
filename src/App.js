import React from 'react';
import './App.css';
import UserLoader from './components/UserLoader';

function App(props) {
  return (
    <>
      <UserLoader />
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
