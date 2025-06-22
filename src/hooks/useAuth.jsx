import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Base_Url } from "../api/api";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginAction = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${Base_Url}auth/login`, userData);
      toast.success("تم تسجيل الدخول بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/admin/dashboard");
    } catch (e) {
      setIsLoading(false);
      toast.error("البريد الالكتروني او كلمة المرور غير صحيحة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setError(e.message);
      navigate("/login");
    }
  };

  return { loginAction, isLoading, error };
};
