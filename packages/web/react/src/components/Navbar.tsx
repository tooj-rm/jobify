import { FaAlignLeft } from 'react-icons/fa';
import { Logo, LogoutContainer, ThemeToggle } from '~/components';
import { useDashboardContext } from '~/contexts';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="flex md:sticky md:top-0 items-center justify-between h-[6rem] px-8 bg-white dark:bg-dark-secondary">
      <button
        type="button"
        className="text-[1.75rem] text-primary-500 cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaAlignLeft/>
      </button>
      <div>
        <Logo className="w-[100px] md:hidden"/>
        <h4 className="hidden md:block">Dashboard</h4>
      </div>
      <div className="flex items-center">
        <ThemeToggle/>
        <LogoutContainer/>
      </div>
    </div>
  );
};

export default Navbar;