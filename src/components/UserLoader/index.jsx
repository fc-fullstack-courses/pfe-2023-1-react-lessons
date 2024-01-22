import React, { Component } from 'react';

class UserLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isError: false,
      isLoading: false,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({
      isLoading: true,
    });

    fetch(`https://randomuser.me/api/?results=20&seed=test&page=${currentPage}`)
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

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  handleNextPage = () => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: currentPage + 1,
    });
  };

  handlePrevPage = () => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : 1,
    });
  };

  render() {
    const { users, isError, isLoading } = this.state;

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
        <div>
          <button onClick={this.handlePrevPage}>Prev</button>
          <button onClick={this.handleNextPage}>Next</button>
        </div>
        {userCards}
      </div>
    );
  }
}

export default UserLoader;
