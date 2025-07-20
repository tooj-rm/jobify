import { createContext, useContext } from 'react';

type Dashboard = {
  user?: { name: string; },
  isDarkTheme: boolean;
  showSidebar: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logout: () => void;
}

export const DashboardContext = createContext<Dashboard>({
  isDarkTheme: false,
  showSidebar: false,
  toggleSidebar: () => null,
  toggleDarkTheme: () => null,
  logout: () => null
});

export const useDashboardContext = () => useContext(DashboardContext);