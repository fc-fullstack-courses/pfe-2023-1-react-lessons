import React from 'react';

class Greeting extends React.Component {
  render() {

    // console.log(this.props)

    // пропси - зовнішні дані які допомогають налаштувати компонент
    // пропси у компоненті можна використовувати тільки для читання

    const { user } = this.props;

    // this.props.user = {test: 1234}; ERROR - елемент не може міняти свої пропси

    return <h1>Hello, {user.name}!</h1>;
  }
}

// function Greeting(props) {
//   const { user } = props;
//   return <h1>Hello, {user.name}!</h1>;
// }

export default Greeting;
