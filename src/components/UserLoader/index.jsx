import React, { Component } from 'react';

class UserLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isError: false,
      isLoading: false,
    };
  }

  render() {
    const { users, isError, isLoading } = this.state;

    if (isLoading) {
      return <h1>LOADING USERS ...</h1>;
    }

    if (isError) {
      return <h1>ERROR HAPPENED</h1>;
    }

    const userCards = users.map((user) => (
      <article>
        <p>User</p>
      </article>
    ));

    return <div>{userCards}</div>;
  }
}

export default UserLoader;
