import React from "react";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  blur,
  change,
  value,
  error,
  touch,
}) => {
  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onBlur={blur}
        onChange={change}
        value={value}
        autoComplete="off"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {error && touch && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputField;
{
  /*
EXAMPLE---------------------------
<InputField
label={"Username"}
name="username"
type={"text"}
placeholder={"Enter your username"}
blur={handleBlur}
change={handleChange}
value={values.username}
error={errors.username}
touched={touched.username}
/> 
EXAMPLE---------------------------
*/
}
