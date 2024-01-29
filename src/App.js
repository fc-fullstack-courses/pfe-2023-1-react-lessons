import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        {/* завжди малюється */}
        <h1>not header</h1>
        {/* малювати за умовою, пов'язаною з урлою */}
        <Switch>
          {/* конкрентний маршрут, світч відмальовую перший маршрут який задовільняє урлі */}
          {/* в урлі частина pathname має хбігатися зі пропом path */}
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route path="/about">
            <AboutUsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
}

function ContactsPage() {
  return (
    <div>
      <h2>Contacts page</h2>
    </div>
  );
}

function AboutUsPage() {
  return (
    <div>
      <h2>About us page</h2>
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
