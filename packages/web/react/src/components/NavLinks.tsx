import { NavLink } from 'react-router';
import { links } from '~/utils/links';
import {clsx as cn } from 'clsx'

const NavLinks = () => {
  return (
    <div className="flex flex-col items-center md:items-start pt-6 text-grey-400">
      {links.map((link) => (
        <NavLink key={link.text} to={link.path} className={cn(
          'flex py-4 md:ml-8 capitalize cursor-pointer',
          'hover:pl-2 hover:text-primary-500 transition-[padding-left] duration-300 ease-in-out',
        )}>
          <span className="grid place-items-center text-[1.5rem] mr-6">{link.icon}</span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;