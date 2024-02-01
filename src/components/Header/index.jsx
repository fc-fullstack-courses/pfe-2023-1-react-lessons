import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { withUser, withTheme } from '../../hocs';
const { THEMES } = CONSTANTS;

function Header({ user, theme, setTheme }) {
  // let currentTheme;

  // if (theme === THEMES.LIGHT) {
  //   currentTheme = styles.lightTheme;
  // } else if (theme === THEMES.DARK) {
  //   currentTheme = styles.darkTheme;
  // }

  // const classes = `${styles.header} ${currentTheme}`;
  /*
    classNames приймає необмежуну кількість аргументів
    якщо аргумент - рядок, то функція додасть його до результуючого рядка класів
    якщо аргумент - об'єкт з парами ключ - значення, де ключ - назва класу
      а значення - булева властивість
        якщо значення правдиве, то класс буде додано
        якщо значення брехливе, то класс не буде додано
  */
  // const testClasses = classNames('class-1', 'class-2','test', { class4: false, class5: true });



  return (
    <header>
      <h1>Site</h1>
      <nav>
        <ul>
          {/* Використовуємо Link замість а  з пропом to замість href */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/login">Login page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// const HeaderWithUser = withUser(Header);

// const HeaderWithUserAndTheme = withTheme(HeaderWithUser);

// const HeaderWithUserAndTheme = withTheme(withUser(Header));

// export default HeaderWithUserAndTheme;

export default Header;
