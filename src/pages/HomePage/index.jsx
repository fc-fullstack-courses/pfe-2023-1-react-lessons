import React from 'react';
import Header from '../../components/Header';
import BlogLoader from '../../components/BlogLoader';

const HomePage = () => {
  return (
    <>
      <Header />
      <h2>Home page</h2>
      <BlogLoader />
    </>
  );
}

export default HomePage;
