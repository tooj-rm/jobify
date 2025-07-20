import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useDashboardContext } from '~/contexts';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <div className="grid place-items-center w-[3.5rem] h-[2rem] bg-transparent border-transparent cursor-pointer"
         onClick={toggleDarkTheme}>
      {isDarkTheme
        ? <BsFillMoonFill className="text-[1.15rem] text-grey-900"/>
        : <BsFillSunFill className="text-[1.15rem] text-grey-900"/>
      }
    </div>
  );
};

export default ThemeToggle;