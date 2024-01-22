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

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        this.setState({
          users: data.results,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
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
