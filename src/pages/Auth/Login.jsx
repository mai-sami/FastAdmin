import React from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { Button, Container, ToastContainer } from "react-bootstrap";
import introImg from "../../assets/images/intro.jpg";
import "../.././components/HomeSection/style.css";
import { loginSchema } from "../../utils/Valdation";
import { useForm } from "react-hook-form";
// import { ToastContainer } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: loginSchema,
  });
  const onSubmit = () => {
    const email = getValues("email");
    const password = getValues("password");
    const userData = {
      email,
      password,
    };
    // loginUser(userData);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const { t } = useTranslation();
  return (
    <div>
      <ToastContainer />

      <Header />
      <Container>
        <div className="introduction">
          <div className="row w-100 justify-content-between">
            <p className="com">،،</p>
            <div className="col-md-6 intro">
              <h1 className="">تسجيل الدخول</h1>
              <form
                // onSubmit={handleSubmit(onSubmit)}
                className="input_filed"
              >
                <input
                  name="email"
                  // {...register("email")}
                  // border={errors?.email ? " red" : "green"}
                  placeholder="البريد الالكتروني"
                  className="input_email"
                />
                <p className="text-danger">
                  djgdrubg rghirohgir
                  {/* {errors.email && <p>{errors.email.message}</p>} */}
                </p>
                <input
                  // {...register("password")}
                  placeholder="كلمة المرور"
                  className="input_email"
                  // border={errors?.password ? "red" : "green"}
                />
                <p className="text-danger">
                  {/* {errors.password && <p>{errors.password.message}</p>} */}
                </p>
                <Button className="btn signIn LoginBtun" variant="success">
                  {t("Login")}
                </Button>{" "}
              </form>
            </div>
            <div className="col-md-6 ">
              <img
                id="image__section"
                src={introImg}
                alt="introImg"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
