import * as yup from "yup";
export const signUpSchema = yup.object({
    username: yup.string().min(3, "Please enter a name with at least 3 characters").max(25).required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    password: yup.string().min(8, "Please enter a password with at least 8 characters").max(25).required("Please enter your password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password does not match").required("confirm password is required")
});
