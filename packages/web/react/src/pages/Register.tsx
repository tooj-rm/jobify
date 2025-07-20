import { Link } from 'react-router';
import FormRow from '~/components/FormRow';
import Logo from '~/components/Logo';
import SubmitBtn from '~/components/SubmitBtn.tsx';

const Register = () => {
  return (
    <div className="grid items-center h-screen">
      <form
        action=""
        className="form"
      >
        <Logo className="mx-auto"/>
        <h4 className="text-center my-4">Register</h4>
        <FormRow type="text" name="name"/>
        <FormRow type="text" name="lastname" labelTxt="Last name"/>
        <FormRow type="text" name="location"/>
        <FormRow type="email" name="email"/>
        <FormRow type="password" name="Password"/>
        <SubmitBtn/>
        <p className="text-center">
          Already have an account? <Link to="/login" className="text-primary-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;