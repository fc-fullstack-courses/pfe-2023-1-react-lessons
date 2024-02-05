import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { useCoords, useClicker } from '../../hooks';

// тіло функціонального компоненту - аналог render () у класового
// фетчі сетІнтервали, і інші побічні ефекти напряму тут не розміщувати
const HooksPage = () => {
  /*
    хук useState приймає початкове значення стану
    повертає кортеж
      перше елемент - поточне значення стану
      другий - персональний setState для зміни цього стану
  */
  // const [clicks, setClick] = useState(0);
  const [step, setStep] = useState(1);
  const coords = useCoords();
  const clicks = useClicker();

  // НЕПРАВИЛЬНО
  // if(5 > 10) {
  //   useEffect(() => {
  //     console.log('some stuff')
  //   });
  // }

  // ПРАВИЛЬНО
  useEffect(() => {
    if (5 > 10) {
      console.log('some stuff');
    }
  });

  // function handleClick() {
  //   setStep((prevStep) => {
  //     setClick((prevClicks) => prevClicks + prevStep);

  //     return prevStep;
  //   });

  //   console.log('handleClick');
  // }

  // useEffect(() => {
  //   console.log('clicks effect');

  //   document.body.addEventListener('click', handleClick);

  //   return () => {
  //     document.body.removeEventListener('click', handleClick);
  //   };
  // }, []);

  useEffect(() => {
    console.log('clicks changed');
  }, [clicks]);

  function handleStep({ target: { value: newStep } }) {
    setStep(+newStep);
  }

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
