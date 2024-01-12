import React, { Component } from 'react';
import './App.css';
import Phone from './components/Phone';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneShown: true,
    };
  }

  handleVisibility = () => {
    this.setState({
      isPhoneShown: !this.state.isPhoneShown,
    });
  };

  render() {
    const { isPhoneShown } = this.state;
    return (
      <>
        <button onClick={this.handleVisibility}>Toggle phone visibility</button>
        {/* {isPhoneShown ? <Phone color="black" price={15999.99} /> : null} */}
        {isPhoneShown && <Phone color="black" price={15999.99} />}
      </>
    );
  }
}

export default App;
