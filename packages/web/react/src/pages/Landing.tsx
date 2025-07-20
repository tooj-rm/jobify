import { Link } from 'react-router';
import Logo from '~/components/Logo';
import main from '~/assets/images/job-hunt.svg'

const Landing = () => {
  return (
    <div className="max-w-[1120px] mx-auto px-6 md:px-10 xl:px-0">
      <nav className="flex items-center h-[6rem]">
        <Logo/>
      </nav>
      <div className="grid md:grid-cols-[1fr_400px] items-center gap-[3rem] h-[calc(100vh-6rem)] -mt-[3rem]">
        <div>
          <h1 className="capitalize font-bold mb-[1.5rem]">
            job <span className="text-primary-500">tracking</span> app
          </h1>
          <p className="mb-3 text-md/2 text-gray-500">
            I'm baby meggings venmo bodega boys blue bottle, fingerstache messenger bag
            migas semiotics shaman activated charcoal edison bulb raclette readymade. Vape man braid chillwave,
            cliche locavore semiotics waistcoat drinking vinegar chambray echo park.
          </p>
          <Link to="/register" className="btn mr-[1rem]">Register</Link>
          <Link to="/login" className="btn">Login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className="hidden md:block"/>
      </div>
    </div>
  );
};

export default Landing;