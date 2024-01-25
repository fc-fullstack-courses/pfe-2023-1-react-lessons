import React from 'react';
import { ThemeContext } from '../../../contexts';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  const renderSidebar = ([theme]) => {

    let currentTheme;

    if(theme === 'light') {
      currentTheme = styles.lightTheme;
    } else if (theme === 'dark') {
      currentTheme = styles.darkTheme;
    }

    const classes = `${styles.container} ${currentTheme}`;

    return <aside className={classes}>
      <h3>Sidebar</h3>
      <p>theme is {theme}</p>
    </aside>
  };

  return <ThemeContext.Consumer>{renderSidebar}</ThemeContext.Consumer>;
};

export default Sidebar;
