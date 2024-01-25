import React from 'react';
import NavList from '../NavList';
import { ThemeContext, UserContext } from '../../contexts';
import styles from './Header.module.css';
import CONSTANTS from '../../constants';
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

// function HeaderWithUser(props) {
//   return (
//     <UserContext.Consumer>
//       {(user) => <Header user={user} {...props} />}
//     </UserContext.Consumer>
//   );
// }

// Компонент Вищого Порядку (High Order Component HOC)
function withUser (Component) {

  function ComponentWithUser (props) {
    return <UserContext.Consumer>
      {(user) => <Component user={user} {...props} />}
    </UserContext.Consumer>
  }

  return ComponentWithUser;
}

const HeaderWithUser = withUser(Header);

function HeaderWithUserAndTheme(props) {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <HeaderWithUser theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
}



export default HeaderWithUserAndTheme;
