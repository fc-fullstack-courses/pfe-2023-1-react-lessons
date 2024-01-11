import React from 'react';
import NavList from '../NavList';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1>Our site</h1>
        <NavList />
      </header>
    );
  }
}

export default Header;