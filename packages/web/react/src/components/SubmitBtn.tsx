import { useNavigation } from 'react-router';

const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn w-full"
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export default SubmitBtn;