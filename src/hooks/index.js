import { useEffect, useState } from 'react';

export function useData(loadData) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);

    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    load();
  }, []);

  return { data, isError, isLoading };
}

export function useCoords() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleChangeCoords({ clientX, clientY }) {
    setCoords({
      x: clientX,
      y: clientY,
    });
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', handleChangeCoords);

    return () => {
      document.body.removeEventListener('mousemove', handleChangeCoords);
    }
  },[]);

  return coords;
}

/*
  створити хук useClicker, він має рахувати кількість кліків 
  на body 

  * Створити компонент TodoList у якому ви маєте можливість додавати 
    тудушки, змінювати їх стан виконання, видаляти їх та відображати їх
    Логіку треба буде винести у користувацький хук.
*/
