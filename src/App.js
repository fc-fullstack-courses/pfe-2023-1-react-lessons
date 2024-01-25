import React from 'react';
import './App.css';
import DataLoader from './components/DataLoader';
import { getPosts, getUsers } from './api';
import UserList from './components/UserList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {}
}

export default App;

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
