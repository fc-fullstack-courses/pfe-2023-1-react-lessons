import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

// тіло функціонального компоненту - аналог render () у класового
// фетчі сетІнтервали, і інші побічні ефекти напряму тут не розміщувати
const HooksPage = () => {
  /*
    хук useState приймає початкове значення стану
    повертає кортеж
      перше елемент - поточне значення стану
      другий - персональний setState для зміни цього стану
  */
  const [clicks, setClick] = useState(0);
  const [step, setStep] = useState(1);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // НЕПРАВИЛЬНО
  // if(5 > 10) {
  //   useEffect(() => {
  //     console.log('some stuff')
  //   });
  // }

  // ПРАВИЛЬНО
  useEffect(()=> {
    if(5 > 10) {
      console.log('some stuff');
    }
  });

  useEffect(function effect() {
    // effect - запускається після рендеру компоненту
    // у базовому застосуванні є поєднанням componentDidMount і componentDidUpdate
    console.log('effect');
    document.body.addEventListener('mousemove', handleChangeCoords);

    // clearEffect - запускається перед розмонтуванням компоненту (componentWillUnmount)
    // І ТАКОЖ перед кожним запуском effect на ререндері
    return function clearEffect() {
      console.log('clearEffect');
      document.body.removeEventListener('mousemove', handleChangeCoords);
    };
    // 2 (необов'язковий) аргумент useEffect - масив залежностей
    // в нього значеннями ви можете закинути будь-які дані
    // якщо при ререндері ці дані зміняться то ефекти запустяться знову
    // інакше повторний виклик буде пропущено
  }, []);

  // function handleClick(e) {
  //   // сюди одразу передаємо нове значення стану
  //   setClick(clicks + step);
  //   console.log(`clicks ${clicks}`);
  //   console.log(`step: ${step}`);
  // }

  // useEffect(() => {
  //   console.log('clicks effect');

  //   document.body.addEventListener('click', handleClick);

  //   return () => {
  //     document.body.removeEventListener('click', handleClick);
  //   };
  // }, [clicks, step]);

  function handleClick() {

    setStep((prevStep => {
      setClick((prevClicks) => prevClicks + prevStep);

      return prevStep;
    }));
    
    console.log('handleClick');
  }

  useEffect(() => {
    console.log('clicks effect');

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);


  useEffect(() => {
    console.log('clicks changed');
  }, [clicks]);

  function handleStep({ target: { value: newStep } }) {
    setStep(+newStep);
  }

  function handleChangeCoords({ clientX, clientY }) {
    setCoords({
      x: clientX,
      y: clientY,
    });
  }

  // document.body.addEventListener('mousemove',handleChangeCoords );

  return (
    <>
      <Header />
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
        }}
        // onMouseMove={handleChangeCoords}
      >
        <p>X: {coords.x}</p>
        <p>Y: {coords.y}</p>
        <p>Clicks: {clicks}</p>
        {/* <button onClick={handleClick}>Click me!!!</button> */}
        <label>
          set step:
          <select value={step} onChange={handleStep}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
    </>
  );
};

const BadHooksPage = () => {
  const [state, setState] = useState({ clicks: 0, step: 1 });

  function handleClick() {
    // у випадку стану-об'єкту ви маєте спредити попередне значення стану у новий
    // об'єкт або частина стану може загубитися
    setState({
      ...state,
      clicks: state.clicks + state.step,
    });
  }

  function handleStep({ target: { value: newStep } }) {
    setState({
      ...state,
      step: +newStep,
    });
  }

  return (
    <>
      <Header />
      <div>
        <p>Clicks: {state.clicks}</p>
        <button onClick={handleClick}>Click me!!!</button>
        <label>
          set step:
          <select value={state.step} onChange={handleStep}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default HooksPage;
