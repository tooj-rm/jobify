import { Outlet } from 'react-router';
import { BigSidebar, Navbar, SmallSidebar } from '~/components';

const DashboardLayout = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
      <SmallSidebar/>
      <BigSidebar/>
      <div>
        <Navbar/>
        <div className="w-[90vw] mx-auto py-[2rem]">
          <Outlet/>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;