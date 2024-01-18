import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isRemebered: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.email.value);
    // console.log(e.target.elements.password.value);
    // const {} = e;

    // e.target.reset();
  };

  // handleEmailChange = (e) => {
  //   console.log(e.target.value);

  //   this.setState({
  //     email: e.target.value,
  //   });
  // };

  /*
    зробити керованим інпут з паролем
  */

  // handlePasswordChange = ({ target: { value } }) => {
  //   this.setState({ password: value });
  // };

  handleChange = ({ target: { name, value, checked, type } }) => {
    const isCheckbox = type === 'checkbox';

    const newState = {
      [name]: isCheckbox ? checked : value ,
    };

    this.setState(newState);
  };

  render() {
    const { email, password, isRemebered } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <label>
        <input
          type="checkbox"
          name="isRemebered"
          checked={isRemebered}
          onChange={this.handleChange}
        /> Is remembered
        </label>

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
