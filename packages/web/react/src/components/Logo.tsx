import logo from '~/assets/images/logo.svg';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <img src={logo} alt="Logo" className={className}/>
  );
};

export default Logo;