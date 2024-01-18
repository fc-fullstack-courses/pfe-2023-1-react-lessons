import React, { Component } from 'react';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements.email.value);
    console.log(e.target.elements.password.value);
    // const {} = e;

    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
