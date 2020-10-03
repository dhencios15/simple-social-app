import React, { useContext } from 'react';

import { AuthContext } from 'context/authContext';

import Hero from 'components/Hero';
import Statistics from 'components/Statistics';
import Footer from 'layouts/Footer';
import Posts from 'pages/Posts/Posts';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <Posts />
      ) : (
        <>
          <Hero />
          <Statistics />
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
