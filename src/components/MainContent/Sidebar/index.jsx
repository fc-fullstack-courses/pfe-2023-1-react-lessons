import React from 'react';
import { ThemeContext } from '../../../contexts';

const Sidebar = (props) => {
  const renderSidebar = (theme) => (
    <aside>
      <h3>Sidebar</h3>
      <p>theme is {theme}</p>
    </aside>
  );

  return <ThemeContext.Consumer>{renderSidebar}</ThemeContext.Consumer>;
};

export default Sidebar;
