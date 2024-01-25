import React from 'react';
import './App.css';
import DeepTree from './components/DeepTree';
import { UserContext } from './contexts';

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
    };
  }

  render() {
    const { user } = this.state;


    // Всі діти провайдера можуть отримати доступ до того, що лежить у контексті (його проп value)
    return (
      <UserContext.Provider value={user}>
        <DeepTree />
      </UserContext.Provider>
    );
  }
}

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
