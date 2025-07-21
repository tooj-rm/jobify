import { Logo, NavLinks } from '~/components';
import { clsx as cn } from 'clsx';
import { useDashboardContext } from '~/contexts';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <div className={cn(
      'hidden md:block -ml-[250px]',
      { 'ml-0': !showSidebar },
      'transition-[margin-left] duration-300 ease-in-out'
    )}>
      <div className="h-screen w-[250px] bg-white dark:bg-dark-secondary">
        <header className="flex items-center justify-center h-[6rem]">
          <Logo/>
        </header>
        <NavLinks/>
      </div>
    </div>
  );
};

export default BigSidebar;