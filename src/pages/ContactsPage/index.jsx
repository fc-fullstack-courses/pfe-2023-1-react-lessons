import React, { useContext } from 'react';
import Header from '../../components/Header';
import { UserContext } from '../../contexts';

const ContactsPage = () => {
  // useContext приймає об'єкт контексту і повертає дані які у ньому знаходяться
  // при зміні даних буде відбуватися ререндер автоматично
  const user = useContext(UserContext);

  return (
    <>
      <Header />
      <h2>Contacts page</h2>
      <h3>
        Contacts of user {user.firstName} {user.lastName}
      </h3>
    </>
  );
};

export default ContactsPage;
