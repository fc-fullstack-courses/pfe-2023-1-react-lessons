import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import HooksPage from './pages/HooksPage';

function App() {
  const [isPageShown, setIsPageShown] = useState(true);

  return (
    <BrowserRouter>
      {/* завжди малюється */}
      {/* малювати за умовою, пов'язаною з урлою */}
      <button onClick={() => setIsPageShown(!isPageShown)}>
        Toggle page visibility
      </button>
      {isPageShown && (
        <Switch>
          {/* конкрентний маршрут, світч відмальовую перший маршрут який задовільняє урлі */}
          {/* в урлі частина pathname має хбігатися зі пропом path */}
          <Route exact path="/">
            {(routeProps) => <HomePage {...routeProps} />}
          </Route>

          <Route
            path="/contacts"
            render={(routeProps) => <ContactsPage {...routeProps} />}
          />

          <Route path="/hooks" component={HooksPage} />
          <Route path="/login" component={LoginPage} />

          {/* <Route path="/about" component={AboutUsPage} />
          <Route path="/profile/:id" component={ProfilePage} /> */}
        </Switch>
      )}
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
