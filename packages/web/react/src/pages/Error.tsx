import { Link, useRouteError } from 'react-router';
import img from '~/assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      {
        // @ts-ignore
        (error.status === 404) ? (
          <>
            <img src={img} alt="not found" className="max-w-[600px] max-h-[300px] mb-[2rem]"/>
            <h3>Page not found</h3>
            <p className="text-grey-500 mb-[1rem]">we can't seem to find the page you are looking for</p>
            <Link to="/" className="text-primary-500">Back Home</Link>
          </>
        ) : (
          <h3>Something went wrong</h3>
        )
      }
    </div>
  );
};

export default Error;