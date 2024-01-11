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
class HeadingClass extends React.Component {
  // має мати метод render
  render() {
    // має повертати реакт елемент / компонент
    return <h1>Some heading class</h1>;
  }
}

// функціональний компонент
function HeadingFunction() {
  // має повертати реакт елемент / компонент
  return <h1>Some heading func</h1>;
}

// відмальовування компоненту
// const headerComponent = React.createElement(HeadingClass);
// const headerComponent = <HeadingClass />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingFunction />);
