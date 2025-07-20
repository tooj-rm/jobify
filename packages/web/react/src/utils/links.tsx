import { IoBarChartSharp } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa';
import { MdQueryStats, MdAdminPanelSettings } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';

export const links = [
  {
    text: 'add job',
    path: '.',
    icon: <FaWpforms/>
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats/>
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile/>
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp/>
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings/>
  },
];