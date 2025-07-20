import { createBrowserRouter, RouterProvider } from 'react-router';
import { DashboardLayout, HomeLayout } from './layouts';
import { AddJob, Admin, AllJobs, EditJob, Error, Landing, Login, Profile, Register, Stats } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
          {
            index: true,
            element: <AddJob/>
          },
          {
            path: 'all-jobs',
            element: <AllJobs/>
          },
          {
            path: 'edit-job/:id',
            element: <EditJob/>
          },
          {
            path: 'profile',
            element: <Profile/>
          },
          {
            path: 'admin',
            element: <Admin/>
          },
          {
            path: 'stats',
            element: <Stats/>
          },
        ]
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;