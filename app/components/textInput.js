const Input = (props) => {
  return (
    <input
    onChange={props.onChange}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="border border-gray-300 p-2 text-sm rounded"
    />
  );
};

export default Input;
