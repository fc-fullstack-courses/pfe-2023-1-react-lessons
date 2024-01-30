import React, { Component } from 'react';
// import { object, number, string, date, mixed, array } from 'yup';
import { loginSchema } from '../../utils/validationSchemas';
import styles from './loginForm.module.css';

const initialValues = {
  email: '',
  password: '',
  isRemebered: false,
  isEmailValid: true,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialValues,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const validData = {
      email: 'user@gmail.com',
      password: '1234test2134',
      code: 15,
    };

    const invalidData = {
      email: 'user@gmail.com',
      code: 15,
    };

    this.setState({
      ...initialValues,
    });
  };

  handleChange = ({ target: { name, value, checked, type } }) => {
    const isCheckbox = type === 'checkbox';

    const newState = {
      [name]: isCheckbox ? checked : value,
    };

    this.setState(newState);
  };

  render() {
    const { email, password, isRemebered, isEmailValid } = this.state;

    const emailClassNames = `${styles.input} ${
      isEmailValid ? styles.validInput : styles.invalidInput
    }`;

    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={emailClassNames}
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={this.handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="isRemebered"
            checked={isRemebered}
            onChange={this.handleChange}
          />{' '}
          Is remembered
        </label>

        <button className={styles.btn} type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
