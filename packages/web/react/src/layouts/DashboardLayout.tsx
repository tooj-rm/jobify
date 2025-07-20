import { useState } from 'react';
import { Outlet } from 'react-router';
import { BigSidebar, Navbar, SmallSidebar } from '~/components';
import { DashboardContext } from '~/contexts';

const DashboardLayout = () => {
  const user = { name: 'Tojo' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const logout = () => {
    console.log('Logout user');
  };

  return (
    <DashboardContext value={{
      user,
      showSidebar,
      isDarkTheme,
      toggleSidebar,
      toggleDarkTheme,
      logout,
    }}>
      <main className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="w-[90vw] md:w-[90%] mx-auto py-[2rem]">
            <Outlet/>
          </div>
        </div>
      </main>
    </DashboardContext>
  );
};

export default DashboardLayout;