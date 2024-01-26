import React from 'react';
import styles from './Header.module.css';
import CONSTANTS from '../../constants';
import { withUser, withTheme } from '../../hocs';
const { THEMES } = CONSTANTS;

function Header({ user, theme, setTheme }) {
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
}

// const HeaderWithUser = withUser(Header);

// const HeaderWithUserAndTheme = withTheme(HeaderWithUser);

// const HeaderWithUserAndTheme = withTheme(withUser(Header));

// export default HeaderWithUserAndTheme;

export default withTheme(withUser(Header));
