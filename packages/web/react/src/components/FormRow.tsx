type Props = {
  name: string;
  labelTxt?: string;
  type: string;
}

const FormRow = ({ name, labelTxt, type }: Props) => {
  return (
    <div className="flex flex-col mb-[1rem]">
      <label
        htmlFor={name}
        className="mb-[0.75rem] capitalize"
      >
        {labelTxt || name}
      </label>
      <input
        type={type}
        name={name}
        className="py-[0.375rem] px-[0.75rem] bg-grey-50 border border-gray-300 focus:outline-none focus:border-primary-500"
      />
    </div>
  );
};

export default FormRow;