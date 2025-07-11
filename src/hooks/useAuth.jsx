import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginAction = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/admin/login",
        userData
      );
      toast.success("تم تسجيل الدخول بنجاح", {
        icon: "👏",
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        position: "top-right",
      });
      localStorage.setItem("user", JSON.stringify(response.data.admin));
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.admin.api_token)
      );
      setIsLoading(false);
      setTimeout(() => {
        navigate("/admins/dashboard");
      }, 900);
    } catch (e) {
      setIsLoading(false);
      toast.error("تأكد من كلمة المرور والبريد الالكتروني", {
        icon: "😔",
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        position: "top-right",
      });
      setError(e.message);
      navigate("/login");
    }
  };
  const Registerinfluencer = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/influencer/register",
        userData
      );
      toast.success("تم تسجيل الدخول بنجاح", {
        icon: "👏",
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        position: "top-right",
      });
      localStorage.setItem("user", JSON.stringify(response.data.admin));
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.admin.api_token)
      );
      setIsLoading(false);
      setTimeout(() => {
        navigate("/influenser/dahsboard");
      }, 900);
    } catch (e) {
      setIsLoading(false);
      toast.error("تأكد من كلمة المرور والبريد الالكتروني", {
        icon: "😔",
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        position: "top-right",
      });
      setError(e.message);
      navigate("/login");
    }
  };

  return { loginAction, isLoading, error };
};
