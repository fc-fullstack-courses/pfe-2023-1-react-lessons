import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import StopWatch from './components/StopWatch';
import List from './components/List';
import Bordered from './components/Bordered';

function App(props) {
  return (
    <>
      {/* <LoginForm />
      <StopWatch /> */}
      <List listName="Stopwatches">
        <StopWatch />
        <StopWatch />
        <StopWatch />
        <StopWatch />
      </List>
      <List>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </List>
      <Bordered bigBorder redBorder >
        <img
          src="https://www.katdootje.nl/wp-content/uploads/kartierr_Maincoon_cat_very_clear_eyes_ultra_realistic_in_a_gian_1a6833b6-35d2-43bf-9cc0-6bc4d1898999.png"
          alt="cat"
        />
      </Bordered>

      <Bordered component={<List />}>
        <List>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </List>
      </Bordered>
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
