import React from 'react';

const UserList = ({users, isLoading, isError}) => {

  if (isLoading) {
    return <h1>LOADING USERS ...</h1>;
  }

  if (isError) {
    return <h1>ERROR HAPPENED</h1>;
  }

  const userCards = users.map(
    ({
      name: { first, last },
      picture: { thumbnail: src },
      login: { uuid },
    }) => (
      <article key={uuid}>
        <h2>
          {first} {last}
        </h2>
        <img src={src} alt={`${first} ${last}`} />
      </article>
    )
  );

  return (
    <div>
      <h2>User list</h2>
      {userCards}
    </div>
  );
}

export default UserList;
