import React, { useState } from 'react';
import Header from '../../components/Header';

const HooksPage = () => {
  /*
    хук useState приймає початкове значення стану
    повертає кортеж
      перше елемент - поточне значення стану
      другий - персональний setState для зміни цього стану
  */
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    // сюди одразу передаємо нове значення стану
    setClicks(clicks + 1);
  }

  return (
    <>
      <Header />
      <div>
        <p>Clicks: {clicks}</p>
        <button onClick={handleClick}>Click me!!!</button>
      </div>
    </>
  );
};

export default HooksPage;
