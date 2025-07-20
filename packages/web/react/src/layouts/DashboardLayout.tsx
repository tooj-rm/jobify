import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div>
      AdminLayout
      <Outlet/>
    </div>
  );
};

export default DashboardLayout;