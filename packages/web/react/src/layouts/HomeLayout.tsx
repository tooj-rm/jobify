import { useEffect } from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {

  useEffect(() => {
    const dark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', dark);
  }, []);

  return (
    <Outlet/>
  );
};

export default HomeLayout;