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

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Our site</h1>
        <NavList />
      </header>
    );
  }
}

function NavList() {
  return (
    <nav>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Content heading</h2>
      <p>Lorem sdsadsdsdsa</p>
    </main>
  );
}

// відмальовування компоненту
// const headerComponent = React.createElement(HeadingClass);
// const headerComponent = <HeadingClass />;

const root = ReactDOM.createRoot(document.getElementById('root'));
// Фрагмент - спеціальний елемент який не залишає по собі вермстки у підсумку
// використовувати якщо треба порендирити декілька елементівв без видимого контейнеру
// ! не передавати атрибути / пропси
// <></> === <React.Fragment></React.Fragment> === React.createElement(React.Fragment)
root.render(
  <>
    <Header />
    <MainContent />
  </>
);
