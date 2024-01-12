import React, { Component } from 'react';
import './App.css';
import Phone from './components/Phone';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneShown: true,
      phones: [
        {
          id: 0,
          color: 'black',
          price: 15999.99,
        },
        {
          id: 1,
          color: 'white',
          price: 9999.99,
        },
        {
          id: 2,
          color: 'gold',
          price: 59999.99,
        },
      ],
    };
  }

  handleVisibility = () => {
    this.setState({
      isPhoneShown: !this.state.isPhoneShown,
    });
  };

  render() {
    const { isPhoneShown, phones } = this.state;

    // const elems = (
    //   <>
    //     <Phone color="black" price={15999.99} />
    //     <button>sdsadsa</button>
    //   </>
    // );

    // ви можете зробити мапом масиви реакт елементів / компонентів 
    // і відрендерити їх одразу
    const phonesComponents = phones.map((phone) => (
      <li>
        <Phone color={phone.color} price={phone.price} />
      </li>
    ));

    return (
      <>
        <button onClick={this.handleVisibility}>Toggle phone visibility</button>
        <ul>{phonesComponents}</ul>
        {/* {isPhoneShown ? <Phone color="black" price={15999.99} /> : null} */}
        {/* {isPhoneShown && (
          <>
            <Phone color="black" price={15999.99} />
            <button>sdsadsa</button>
          </>
        )} */}
        {/* {isPhoneShown && elems} */}
        {/* {isPhoneShown && <OtherComponent />} */}
      </>
    );
  }
}

function OtherComponent() {
  return (
    <>
      <Phone color="black" price={15999.99} />
      <button>sdsadsa</button>
    </>
  );
}

export default App;
