import { useEffect, useState } from "react";

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