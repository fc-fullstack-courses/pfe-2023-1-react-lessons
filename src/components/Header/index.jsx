import React from 'react';
import NavList from '../NavList';
import { ThemeContext } from '../../contexts';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    const renderHeader = ([theme, setTheme]) => {
      let currentTheme;

      if (theme === 'light') {
        currentTheme = styles.lightTheme;
      } else if (theme === 'dark') {
        currentTheme = styles.darkTheme;
      }

      const classes = `${styles.header} ${currentTheme}`;

      return (
        <header className={classes}>
          <h1>Our site</h1>
          <NavList />
          <p>Theme is {theme}</p>
          <select value={theme} onChange={(e) => {
            setTheme(e.target.value);
          }}>
            <option value="light">Light theme</option>
            <option value="dark">DarkTheme</option>
          </select>
        </header>
      );
    };

    return <ThemeContext.Consumer>{renderHeader}</ThemeContext.Consumer>;
  }
}

export default Header;
