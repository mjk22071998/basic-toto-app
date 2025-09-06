type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
};

const Input = ({name, type, placeholder, value}: InputProps) => {
  return (
    <input
      className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow"
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
    />
  )
}

export default Input