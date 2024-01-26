import React from 'react';
import classNames from 'classnames';
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
  
  const classes = classNames(styles.header, {
    [styles.lightTheme] : theme === THEMES.LIGHT, 
    [styles.darkTheme] : theme === THEMES.DARK
  } );

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
