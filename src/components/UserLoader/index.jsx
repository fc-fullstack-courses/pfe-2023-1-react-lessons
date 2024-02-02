import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api';

const UserLoader = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const load = async () => {
    setIsLoading(true);

    try {
      const results = await getUsers({ page: currentPage });
      setUsers(results);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  const handleChangePage = (isNext) => {
    setCurrentPage((prevPage) =>
      isNext ? prevPage + 1 : prevPage > 1 ? prevPage - 1 : 1
    );
  };

  if (isLoading) {
    return <h1>LOADING USERS ...</h1>;
  }

  if (isError) {
    return <h1>ERROR HAPPENED</h1>;
  }

  const userCards = users.map(
    ({
      name: { first, last },
      picture: { thumbnail: src },
      login: { uuid },
    }) => (
      <article key={uuid}>
        <h2>
          {first} {last}
        </h2>
        <img src={src} alt={`${first} ${last}`} />
      </article>
    )
  );
  return (
    <div>
      <div>
        <button onClick={() => handleChangePage(false)}>Prev</button>
        <button onClick={() => handleChangePage(true)}>Next</button>
      </div>
      {userCards}
    </div>
  );
};

export default UserLoader;
