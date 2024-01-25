import React from 'react';
import { UserContext } from '../../../../../../contexts';

const TreeLvlMax = ({ data, style, ...rest }) => {
  /*
    Consumer приймає у якості чілдрена функцію - рендер проп
    яка аргуметом отримє значення контексту і повертає верстку
    з даними з контексту
  */
  return (
    <UserContext.Consumer>
      {(user) => (
        <div
          style={{
            border: '2px solid black',
            padding: '10px',
            ...style,
          }}
        >
          <h1>TreeLvlMax</h1>
          <h2>
            Hello {user.firstName} {user.lastName}
          </h2>
          <img src={user.imgSrc} alt={`${user.firstName} ${user.lastName}`} />
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default TreeLvlMax;
