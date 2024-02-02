import React, { useContext } from 'react';
import classNames from 'classnames';
import Header from '../../components/Header';
import { ThemeContext, UserContext } from '../../contexts';
import styles from './ContactsPage.module.scss';
import CONSTANTS from '../../constants';

const ContactsPage = () => {
  // useContext приймає об'єкт контексту і повертає дані які у ньому знаходяться
  // при зміні даних буде відбуватися ререндер автоматично
  const user = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  // створити контекст теми та під'єданати до нього якийсь компонент
  // за допомогою хука useContext

  const classString = classNames({
    [styles.light] : theme === CONSTANTS.THEMES.LIGHT,
    [styles.dark] : theme === CONSTANTS.THEMES.DARK
  });

  return (
    <div className={classString}>
      <Header />
      <h2>Contacts page</h2>
      <h3>
        Contacts of user {user.firstName} {user.lastName}
      </h3>
    </div>
  );
};

export default ContactsPage;
