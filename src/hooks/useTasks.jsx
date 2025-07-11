import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config/api";
import { config } from "../config/headerConfig";
import { Navigate } from "react-router-dom";

export const useTasks = () => {
  const [data, setData] = useState([]);
  const [deleteusers, setdeleteusers] = useState([]);

  const [createPromodata, setCreatePromodata] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [active, setActive] = useState("");
  const [massges, setMassges] = useState("");

  const CreatePromoCode = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/admin/promo-codes`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("تم انشاء الكود بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setLoading(false);
      setCreatePromodata(response.data.data);
      console.log(response.data.data, "formData");
    } catch (error) {
      toast.error("انتبه - يرجى التأكد من البيانات المدخلة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setLoading(false);
      setError(error.message);
    }
  };
  const deletePromoCode = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${API_URL}/admin/promo-codes/${id}`,
        { params: config }
      );
      setLoading(false);
      setData(response.data);
      toast.success("تم حذف الكود بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    } catch (error) {
      setLoading(false);
      toast.error("انتبه - لم يتم حذف المهمة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });

      setError(error.message);
    }
  };
  const deleteUsers = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`${API_URL}/admin/users/${id}`, {
        params: config,
      });
      setLoading(false);
      setdeleteusers(response.data);
      toast.success("تم حذف المستخدم بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    } catch (error) {
      setLoading(false);
      toast.error("انتبه - لم يتم حذف المهمة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });

      setError(error.message);
    }
  };
  const CahngeUserStatusActive = async (id, status) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}/admin/users/${id}/${status}`,
        config
      );
      setLoading(false);
      setActive(response.data);
      toast.success("تم تعديل حالة المستخدم بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    } catch (error) {
      setLoading(false);
      toast.error("انتبه - لم يتم تعديل حالة المستخدم المهمة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });

      setError(error.message);
    }
  };

  const updatePromoCode = async (id) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}tasks/edit-task/ ${id}`,
        config
      );
      setLoading(false);
      setData(response.data);
      toast.success("تم تعديل المهمة بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    } catch (error) {
      setLoading(false);
      toast.error("انتبه - لم يتم تعديل المهمة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });

      setError(error.message);
    }
  };
  const CreateMassges = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/admin/send-message`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response, "masgesresponse");
      setMassges(response.data.data);

      toast.success("تم إرسال الرسائل بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setLoading(false);

    } catch (error) {
      toast.error("انتبه - يرجى التأكد من البيانات المدخلة", {
        icon: "😔",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
      setLoading(false);
      setError(error.message);
    }
  };
  const UpdatePromoCodes = async (promoData) => {
    return await axios.post(`${API_URL}/admin/update-promo`, promoData, config);
  };
  return {
    updatePromoCode,
    deletePromoCode,
    CreatePromoCode,
    data,
    CreateMassges,
    deleteusers,
    CahngeUserStatusActive,
    createPromodata,
    isLoading,
    deleteUsers,
    UpdatePromoCodes,
    massges,
  };
};
