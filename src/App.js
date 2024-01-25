import React from 'react';
import './App.css';
import DeepTree from './components/DeepTree';
import { ThemeContext, UserContext } from './contexts';
import Header from './components/Header';
import MainContent from './components/MainContent';

/*
  Використання контексту:
    1. Створити контекст (React.createContext())
    2. Передача даних контексту
    3. Отримати дані у потрібному вам компоненті
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 1233443,
        firstName: 'User',
        lastName: 'Test',
        imgSrc: 'pic.jpg',
      },
      theme: 'light',
    };
  }

  changeTheme = (newTheme) => {
    this.setState({
      theme: newTheme
    })
  }

  render() {
    const { user, theme } = this.state;

    // Всі діти провайдера можуть отримати доступ до того, що лежить у контексті (його проп value)
    return (
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={[theme, this.changeTheme]}>
          <Header />
          <MainContent />
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

/*
  У компоненті App у стейті зберігати стрінгу, яка описує поточну тему вашого сайту 
  (денна, нічна...)
  Створити (якщо таких ще намає) компоненти Header, MainContent і Sidebar
  Структура має бути такою:

  App
    Header
    MainContent
      Sidebar

  У компонентах Header і Sidebar отримати значення теми сайту, не використовуючи пропси
*/

export default App;

export { UserContext };

/*
  повторне використання логіки в реакті:
    1. рендер пропси (якийсь проп-функція яка повертає JSX у компонента, зазвичай render)
    2. Компоненти Вищого Порядку (HOC - High Order Components, назви розпочинаються з with)
    3. Хуки ( назви розпочинаються з use)
*/

<Avatar src="sadsdsadsa" />;

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

<GuestAvatar />;

// function GuestAvatar ({ alt}) {
//   return <img src={'gefaultPicsrc.jpg'} alt={alt}/>
// }

function GuestAvatar({ alt }) {
  return <Avatar src={'gefaultPicsrc.jpg'} alt={alt} />;
}
