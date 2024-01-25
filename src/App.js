import React from 'react';
import './App.css';
import DataLoader from './components/DataLoader';
import { getPosts, getUsers } from './api';
import UserList from './components/UserList';

function App(props) {
  const renderPosts = (state) => {
    const { data: posts, isLoading, isError } = state;

    const postList = posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <button>Learn more</button>
      </article>
    ));

    return (
      <section>
        <h2>Posts</h2>
        {isLoading && <h3>LOADING ...</h3>}
        {isError && <h3>ERROR</h3>}
        {postList}
      </section>
    );
  };

  const renderUsers = (state) => {
    const { data: users, isLoading, isError } = state;
    return <UserList users={users} isError={isError} isLoading={isLoading} />;
  };

  function loadTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) =>
      res.json()
    );
  }

  const renderTodos = (state) => {
    const { data, isLoading, isError } = state;
    if (isLoading) {
      return <h2>LOADING ...</h2>;
    }

    if (isError) {
      return <h2>ERROR!!!</h2>;
    }

    const todos = data.map((todo) => (
      <section key={todo.id}>
        <h3>{todo.title}</h3>
        <input type="checkbox" checked={todo.completed} />
      </section>
    ));

    return (
      <section>
        <h2>TODO LIST</h2>
        {todos}
      </section>
    );
  };

  return (
    <>
      <DataLoader loadData={getPosts}>{renderPosts}</DataLoader>
      <DataLoader loadData={loadTodos}>{renderTodos}</DataLoader>
      {/* <DataLoader loadData={() => getUsers({ page: 1 })} abc={renderUsers} />
      <DataLoader
        loadData={() => fetch('/manifest.json').then((res) => res.json())}
        abc={() => <p>this is render prop</p>}
      /> */}
      {/* <UserLoader /> */}
    </>
  );
}

/*
  За допомогою компоненту DataLoader завантажити та відобразити дані
  які розташовані за адресою https://jsonplaceholder.typicode.com/todos

  * DataLoader треба буде написати самому
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
