import React from "react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { Button, Container, Spinner } from "react-bootstrap";
import introImg from "../../assets/images/freepik_assistant_1750705321541.png";
import "../.././components/HomeSection/style.css";
import { loginSchema } from "../../utils/Valdation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { loginAction, isLoading } = useAuth();

  const onSubmit = () => {
    const email = getValues("email");
    const password = getValues("password");
    const userData = {
      email,
      password,
    };
    loginAction(userData);
  };
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <Container>
        <div className="introduction">
          <div className="row w-100 justify-content-between">
            <p className="com">،،</p>
            <div className="col-md-5 intro">
              <h1 className="">تسجيل الدخول</h1>
              <ToastContainer />
              {isLoading ? (
                <div className="Spinner_admin">
                  <Spinner animation="border" variant="warning" />
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="input_filed">
                  <input
                    name="email"
                    {...register("email")}
                    className={
                      errors?.email ? "input_email error_input" : "input_email"
                    }
                    placeholder="البريد الالكتروني"
                  />
                  <p className="text-danger">
                    {errors.email && <p>{errors.email.message}</p>}
                  </p>
                  <input
                    {...register("password")}
                    placeholder="كلمة المرور"
                    className={
                      errors?.password
                        ? "input_email error_input"
                        : "input_email"
                    }
                  />
                  <p className="text-danger">
                    {errors.password && <p>{errors.password.message}</p>}
                  </p>
                  <Button
                    className="btn signIn LoginBtun"
                    type="submit"
                    variant="success"
                  >
                    {t("Login")}
                  </Button>{" "}
                </form>
              )}
            </div>
            <div className="col-md-6 ">
              <img
                id="image__section"
                src={introImg}
                alt="introImg"
                className="lgin_image"
              />
            </div>
            <ToastContainer />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
