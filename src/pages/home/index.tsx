import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <div className='home_box'>
      Home
      <Outlet />
    </div>
  );
};

export default Home;
