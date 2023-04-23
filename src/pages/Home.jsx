import React from 'react';
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <main className="mx-12 columns-2 lg:columns-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    </>
  );
};

export default Home;
