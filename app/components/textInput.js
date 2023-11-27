const Input = (props) => {
  return (
    <input
    onChange={props.onChange}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full p-2 text-sm border border-gray-300 rounded"
    />
  );
};

export default Input;
