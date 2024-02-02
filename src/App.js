import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import HooksPage from './pages/HooksPage';
import Clicker from './components/Clicker';
import { UserContext } from './contexts';

function App() {
  const [user, setUsers] = useState({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Switch>
          <Route exact path="/">
            {(routeProps) => <HomePage {...routeProps} />}
          </Route>

          <Route
            path="/contacts"
            render={(routeProps) => <ContactsPage {...routeProps} />}
          />

          <Route path="/hooks" component={HooksPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
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
