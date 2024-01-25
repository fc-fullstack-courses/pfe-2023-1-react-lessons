import React from 'react';
import NavList from '../NavList';
import { ThemeContext } from '../../contexts';
import './style.css';

class Header extends React.Component {
  render() {

    const renderHeader = (theme) => (
      <header className="header">
        <h1>Our site</h1>
        <NavList />
        <p>Theme is {theme}</p>
      </header>
    );

    return <ThemeContext.Consumer>{renderHeader}</ThemeContext.Consumer>;
  }
}

export default Header;
