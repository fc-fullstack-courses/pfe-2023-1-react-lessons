
export async function getUsers (currentPage) {
  const res = await fetch(
    `https://randomuser.me/api/?results=20&seed=test&page=${currentPage}`
  );

  const { results } = await res.json();

  return results;
}