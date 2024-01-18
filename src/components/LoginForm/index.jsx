import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.email.value);
    // console.log(e.target.elements.password.value);
    // const {} = e;

    // e.target.reset();
  };

  handleEmailChange = (e) => {
    console.log(e.target.value);

    this.setState({
      email: e.target.value,
    });
  };

  /*
    зробити керованим інпут з паролем
  */

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
