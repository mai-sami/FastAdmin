import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Please enter a email").email(),
  password: yup.string().required("Please enter a password").min(6)
});
