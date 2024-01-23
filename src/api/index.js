import queryString from 'query-string';

export async function getUsers(options = {}) {
  const defaultOptions = {
    page: 1,
    results: 10,
    format: 'json',
    seed: 'test',
    nat: 'gb',
    inc: ['name', 'login', 'picture']
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  // const { page, results, nat, seed, inc } = finalOptions;

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma'});

  const res = await fetch(`https://randomuser.me/api/?${query}`);

  const { results: users } = await res.json();

  return users;
}
