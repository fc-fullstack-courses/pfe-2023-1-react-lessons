import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/*
  Компонентів існує 2 види
    класові
    функціональні
*/

// класовий компонент
// має успадковуватися від React.Component
// class HeadingClass extends React.Component {
//   // має мати метод render
//   render() {
//     // має повертати реакт елемент / компонент
//     return <h1>Some heading class</h1>;
//   }
// }

// // функціональний компонент
// function HeadingFunction() {
//   // має повертати реакт елемент / компонент
//   return <h1>Some heading func</h1>;
// }

// створіть компонент який буде відмальовувати параграф тексту

// class TextClassSolution extends React.Component {
//   render() {

//     return <p>text class</p>;
//   }
// }

// function TextFunctionSolution () {
//   return <p>text func</p>;
// }

/*
  реакт не показує булеві значення, null, undefined, Symbol, ""
  реакт кидається помилкою якщо малювати звичайний об'єкт
  якщо малювати масив то все залежить від вмісту массиву
  усе інше реакт малює нормально
*/

// відмальовування компоненту
// const headerComponent = React.createElement(HeadingClass);
// const headerComponent = <HeadingClass />;

const root = ReactDOM.createRoot(document.getElementById('root'));
// Фрагмент - спеціальний елемент який не залишає по собі вермстки у підсумку
// використовувати якщо треба порендирити декілька елементівв без видимого контейнеру
// ! не передавати атрибути / пропси
// <></> === <React.Fragment></React.Fragment> === React.createElement(React.Fragment)
root.render(<App />);
