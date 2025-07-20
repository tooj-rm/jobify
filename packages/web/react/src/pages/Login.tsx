import { Link } from 'react-router';
import FormRow from '~/components/FormRow';
import Logo from '~/components/Logo';
import SubmitBtn from '~/components/SubmitBtn';

const Login = () => {
  return (
    <div className="grid items-center h-screen">
      <form action="" className="form">
        <Logo className="mx-auto"/>
        <h4 className="text-center my-4">Login</h4>
        <FormRow type="email" name="email"/>
        <FormRow type="password" name="Password"/>
        <SubmitBtn/>
        <p className="text-center my-4">
          Not a member yet? <Link to="/register" className="text-primary-500">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;