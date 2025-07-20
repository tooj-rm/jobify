import { clsx as cn } from 'clsx';
import { FaTimes } from 'react-icons/fa';
import { Logo, NavLinks } from '~/components';
import { useDashboardContext } from '~/contexts';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <div className={cn(
      'fixed inset-0 flex md:hidden items-center justify-center bg-black/80 opacity-0',
      { 'opacity-100 z-99': showSidebar }
    )}>
      <div className="relative flex items-center flex-col h-[95vh] w-[90vw] py-20 px-10 rounded-[0.25rem] bg-white">
        <button
          className="absolute top-[10px] left-[10px] text-[2rem] text-red-dark cursor-pointer"
          onClick={toggleSidebar}>
          <FaTimes/>
        </button>
        <header>
          <Logo/>
        </header>
        <NavLinks/>
      </div>
    </div>
  );
};

export default SmallSidebar;