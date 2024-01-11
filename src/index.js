import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
  Компонентів існує 2 види
    класові
    функціональні
*/

// класовий компонент
// має успадковуватися від React.Component 
class Heading extends React.Component {

  // має мати метод render
  render () {
    // має повертати реакт елемент / компонент
    return <h1>Some heading</h1>;
  }
}

// відмальовування компоненту
// const headerComponent = React.createElement(Heading);
const headerComponent = <Heading />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headerComponent);
