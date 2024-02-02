import React, { Component } from 'react';
import { getUsers } from '../../api';
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

  load = async () => {
    const { currentPage } = this.state;
    this.setState({
      isLoading: true,
    });

    try {
      const results = await getUsers({ page: currentPage });

      this.setState({ users: results });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  handleChangePage = (isNext) => {
    const { currentPage } = this.state;

    if (isNext) {
      this.setState({
        currentPage: currentPage + 1,
      });
    } else {
      this.setState({
        currentPage: currentPage > 1 ? currentPage - 1 : 1,
      });
    }
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
          <button onClick={() => this.handleChangePage(false)}>Prev</button>
          <button onClick={() => this.handleChangePage(true)}>Next</button>
        </div>
        {userCards}
      </div>
    );
  }
}

export default UserLoader;
