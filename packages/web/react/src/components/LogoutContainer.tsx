import { useState } from 'react';
import { useDashboardContext } from '~/contexts';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { clsx as cn } from 'clsx';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useDashboardContext();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowLogout(!showLogout)}
        className="flex items-center justify-center gap-x-3 btn"
      >
        <FaUserCircle/>
        {user?.name}
        <FaCaretDown/>
      </button>
      <div className={cn(
        'absolute top-[45px] left-0 w-full invisible text-center',
        { 'visible': showLogout }
      )}>
        <button
          type="button"
          className="capitalize btn w-full"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default LogoutContainer;