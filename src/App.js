import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        {/* завжди малюється */}
        <header>
          <h1>Site</h1>
          <nav>
            <ul>
              {/* Використовуємо Link замість а  з пропом to замість href */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* малювати за умовою, пов'язаною з урлою */}
        <Switch>
          {/* конкрентний маршрут, світч відмальовую перший маршрут який задовільняє урлі */}
          {/* в урлі частина pathname має хбігатися зі пропом path */}
          <Route exact path="/">
            {(routeProps) => <HomePage {...routeProps} />}
          </Route>

          <Route path="/contacts" render={(routeProps) => <ContactsPage {...routeProps} />} />

          <Route path="/about" component={AboutUsPage} />

          <Route path="/profile/:id" component={ProfilePage}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

function HomePage(props) {
  console.log(props);

  // setTimeout(() => {props.history.push('/about')},5000);

  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
}

function ContactsPage(props) {
  console.log(props);
  return (
    <div>
      {props.location.pathname === '/contacts' && <p>You are on contacts page</p>}
      <h2>Contacts page</h2>
    </div>
  );
}

function AboutUsPage(props) {
  console.log(props.match);
  return (
    <div>
      <h2>About us page</h2>
    </div>
  );
}

function ProfilePage(props) {
  console.log(props.match);
  return (
    <div>
      <h2>Profile {props.match.params.id} page</h2>
    </div>
  );
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

/*
  Під'єднайте будь'які 2 компоненти до контексту теми за допомогою 
  withTheme 
  класи в компонентах при цьому умовно рендерити за допомогою бібліотеки classNames
  стилі для тем зробіть з використанням SASS шаблонів
*/

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
