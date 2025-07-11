import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Please enter a email").email(),
  password: yup.string().required("Please enter a password").min(6),
});

export const CreateCodeSchema = yup.object({
  code: yup.string().required("الرجاء ادخال الكود").min(2),
  description: yup.string().required("الرجاء إدخال الوصف").min(6),
  wallet_address: yup.string().required("أدخل عنوان المحفظة").min(6),
  influencer_name: yup.string().required("أدخل اسم المؤثر").min(6),
  influencer_email: yup.string().required("الرجاء ادخال الغيميل").min(6),
  influencer_password: yup.string().required("الرجاء ادخال كلمة مرور").min(6),
});

export const massgesSchema = yup.object({
  subject: yup.string().required("الرجاء إدخال عنوان الرسالة").min(2),
  message: yup.string().required("الرجاء إدخال موضوع الرسالة").min(2),
});
