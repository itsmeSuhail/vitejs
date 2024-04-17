import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "../../utils/yupSchema";
import { toast } from "react-toastify";
import InputField from "../../Components/Fields/InputField";

const SignUp = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { errors, values, handleChange, handleBlur, handleSubmit ,handleReset,touched} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      toast.success("account has been created")
      handleReset();
    },
  });
  return (
    <>
      <div className="w-full ">
       
        <form
          onSubmit={handleSubmit}
          className="m-auto w-[500px] shadow-md p-5 rounded-md bg-white"
        >
           <h1 className="text-center text-3xl font-extrabold text-gray-900">
          SignUp
        </h1>
        <InputField
        label={"Username"}
        name="username"
        type={"text"}
        placeholder={"Enter your username"}
        blur={handleBlur}
        change={handleChange}
        value={values.username}
        error={errors.username}
        touch={touched.username}
        />
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            {(errors.email&&touched.email) && <p className="text-red-500">{errors.email}</p>}
          </div>
<div className="mb-2">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="password"
  >
    Password
  </label>
  <input
    onBlur={handleBlur}
    onChange={handleChange}
    value={values.password}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="password"
    type="password"
    name="password"
    placeholder="Enter Password"/>
    {(touched.password&& errors.password) && <p className="text-red-500">{errors.password}</p>}
</div>
<div className="mb-2">
  <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="confirmPassword"
  >
    Confirm Password
  </label>
  <input
    onBlur={handleBlur}
    onChange={handleChange}
    value={values.confirmPassword}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="confirmPassword"
    type="password"
    name="confirmPassword"
    placeholder="Confirm Password"/>
    {(errors.confirmPassword &&touched.confirmPassword) && <p className="text-red-500">{errors.confirmPassword}</p>}
</div>

          <div className="mb-2">
            <button
              type="submit"
              className="text-white px-4 py-2 rounded bg-black/70 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
