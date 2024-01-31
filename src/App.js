import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import DataLoader from './components/DataLoader';
import PhoneDashboard from './components/PhoneDashboard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        {/* завжди малюється */}
        {/* малювати за умовою, пов'язаною з урлою */}
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

          <Route path="/login" component={LoginPage} />

          {/* <Route path="/about" component={AboutUsPage} />
          <Route path="/profile/:id" component={ProfilePage} /> */}
        </Switch>
        <PhoneDashboard />
       </BrowserRouter>
    );
  }
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
