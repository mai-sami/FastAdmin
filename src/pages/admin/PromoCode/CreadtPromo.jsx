import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CreateCodeSchema } from "../../../utils/Valdation";
import { useTasks } from "../../../hooks/useTasks";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreadtPromo() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCodeSchema),
  });
  const { CreatePromoCode, createPromodata, isLoading } = useTasks();
  const navgate = useNavigate();
  const onSubmit = () => {
    const api_token = JSON.parse(localStorage.getItem("token"));
    const code = getValues("code");
    const wallet_address = getValues("wallet_address");
    const influencer_name = getValues("influencer_name");
    const description = getValues("description");
    const influencer_password = getValues("influencer_password");
    const influencer_email = getValues("influencer_email");
    const formDatas = new FormData();
    formDatas.append("email", "mai@gmail.com");
    formDatas.append("api_token", api_token);
    formDatas.append("password", "mai123");
    formDatas.append("code", code);
    formDatas.append("description", description);
    formDatas.append("influencer_name", influencer_name);
    formDatas.append("influencer_email", influencer_email);
    formDatas.append("influencer_password", influencer_password);
    formDatas.append("wallet_address", wallet_address);
    const formData = {};
    formDatas.forEach((value, key) => {
      formData[key] = value;
    });
    console.log(formData);

    CreatePromoCode(formData);
    navgate("/admin/promo");
  };
  return (
    <Container className="admin_home">
      <ToastContainer />
      <p>اضافة كود جديد</p>
      <form onSubmit={handleSubmit(onSubmit)} className="createform_promo">
        <div className="createform_data">
          <div className="level_create">
            <p>بيانات الكود</p>

            <div className="flex_input">
              <span className="name_create">اسم الكود</span>
              <input
                placeholder="الكود الترويجي"
                {...register("code")}
                className={
                  errors?.code ? "input_form error_input" : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.code && <p>{errors.code.message}</p>}
            </p>
            <div className="flex_input">
              <span className="name_create">الوصف (إختياري)</span>
              <textarea
                placeholder="الوصف"
                {...register("description")}
                className={
                  errors?.description ? "input_form error_input" : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.description && <p>{errors.description.message}</p>}
            </p>
            <div className="flex_input">
              <span className="name_create">عنوان المحفظة</span>
              <textarea
                placeholder="عنوان المحفظة"
                {...register("wallet_address")}
                className={
                  errors?.wallet_address
                    ? "input_form error_input"
                    : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.wallet_address && <p>{errors.wallet_address.message}</p>}
            </p>
          </div>
          <hr className="hr" />
          <div className="level_create">
            <p>بيانات المؤثر</p>

            <div className="flex_input">
              <span className="name_create">اسم المؤثر</span>
              <input
                {...register("influencer_name")}
                placeholder="اسم المؤثر"
                className={
                  errors?.influencer_name
                    ? "input_form error_input"
                    : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.influencer_name && (
                <p>{errors.influencer_name.message}</p>
              )}
            </p>
            <div className="flex_input">
              <span className="name_create">البريد الإلكتروني</span>
              <input
                placeholder="البريد الإلكتروني"
                name="email"
                {...register("influencer_email")}
                className={
                  errors?.influencer_email
                    ? "input_form error_input"
                    : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.influencer_email && (
                <p>{errors.influencer_email.message}</p>
              )}
            </p>
            <div className="flex_input">
              <span className="name_create">كلمة المرور</span>
              <input
                placeholder="كلمة المرور"
                {...register("influencer_password")}
                className={
                  errors?.influencer_password
                    ? "input_form error_input"
                    : "input_form"
                }
              />
            </div>
            <p className="text-danger">
              {errors.influencer_password && (
                <p>{errors.influencer_password.message}</p>
              )}
            </p>
          </div>
        </div>
        <Button className="btn createPromo" type="submit" variant="success">
          انشاء كود ترويجي
        </Button>
      </form>
    </Container>
  );
}

export default CreadtPromo;
