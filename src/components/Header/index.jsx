import React from 'react';
import NavList from '../NavList';
import { ThemeContext, UserContext } from '../../contexts';
import styles from './Header.module.css';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

class Header extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <ThemeContext.Consumer>
            {([theme, setTheme]) => {
              let currentTheme;

              if (theme === THEMES.LIGHT) {
                currentTheme = styles.lightTheme;
              } else if (theme === THEMES.DARK) {
                currentTheme = styles.darkTheme;
              }

              const classes = `${styles.header} ${currentTheme}`;

              return (
                <header className={classes}>
                  <h1>Our site</h1>
                  <h2>
                    Hello {user.firstName} {user.lastName}
                  </h2>
                  <select
                    value={theme}
                    onChange={(e) => {
                      setTheme(e.target.value);
                    }}
                  >
                    <option value={THEMES.LIGHT}>Light theme</option>
                    <option value={THEMES.DARK}>DarkTheme</option>
                  </select>
                </header>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Header;
