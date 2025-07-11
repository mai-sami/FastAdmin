import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { massgesSchema } from "../../utils/Valdation";
import { ToastContainer } from "react-toastify";
import { useTasks } from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";

function Massges() {
  const [send_to, setSend_to] = React.useState("all");
  const navgate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(massgesSchema),
  });
  const handleChange = (event) => {
    setSend_to(event.target.value);
    console.log(send_to, "send_to");
  };
  const { CreateMassges, isLoading } = useTasks();

  const onSubmit = () => {
    const subject = getValues("subject");
    const message = getValues("message");
    const api_token = JSON.parse(localStorage.getItem("token"));

    const formDatas = new FormData();
    formDatas.append("email", "mai@gmail.com");
    formDatas.append("api_token", api_token);
    formDatas.append("password", "mai123");
    formDatas.append("subject", subject);
    formDatas.append("message", message);
    formDatas.append("send_to", send_to);

    const formData = {};

    formDatas.forEach((value, key) => {
      formData[key] = value;
    });
    CreateMassges(formData);

    setTimeout(() => {
      navgate("/admin/support-open");
    }, 900);
  };
  return (
    <Container className="admin_home">
      <ToastContainer />
      <p>لوحة ارسال الرسائل لجميع المستخدمين</p>
      <div className="massge_page">
        <div className="RadioGroups">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={send_to}
              onChange={handleChange}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="إرسال الرسائل لجميع المودعين"
              />
              <FormControlLabel
                value="depositors"
                control={<Radio />}
                label="إرسال الرسائل لجميع المستخدمين"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <hr className="hr" />
        {isLoading ? (
          <div className="Spinner_admin">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="form_massges ">
            <span className="name_massges">عنوان الرسالة</span>
            <input
              name="message"
              {...register("message")}
              className={
                errors?.message
                  ? "input_form_massges error_input"
                  : "input_form_massges"
              }
              placeholder="اكتب هنا ......"
            />
            <p className="text-danger">
              {errors.message && <p>{errors.message.message}</p>}
            </p>
            <span className="name_massges">الموضوع</span>
            <textarea
              {...register("subject")}
              placeholder="اكتب هنااا........."
              className={
                errors?.subject
                  ? "input_form_massges textArea error_input"
                  : "input_form_massges"
              }
            />
            <p className="text-danger">
              {errors.subject && <p>{errors.subject.message}</p>}
            </p>
            <Button
              className="btn input_forms_masges btn_send"
              type="submit"
              variant="success"
            >
              إرسال{" "}
            </Button>{" "}
          </form>
        )}
      </div>
    </Container>
  );
}

export default Massges;
