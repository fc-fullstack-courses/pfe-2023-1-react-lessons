import React from 'react';
import { ThemeContext } from '../../../contexts';
import styles from './Sidebar.module.css';
import CONSTANTS from '../../../constants';
const { THEMES } = CONSTANTS;

const Sidebar = ({ theme }) => {
  let currentTheme;

  if (theme === THEMES.LIGHT) {
    currentTheme = styles.lightTheme;
  } else if (theme === THEMES.DARK) {
    currentTheme = styles.darkTheme;
  }

  const classes = `${styles.container} ${currentTheme}`;

  return (
    <aside className={classes}>
      <h3>Sidebar</h3>
      <p>theme is {theme}</p>
    </aside>
  );
};

function SidebarWithTheme(props) {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <Sidebar theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
}

export default SidebarWithTheme;
