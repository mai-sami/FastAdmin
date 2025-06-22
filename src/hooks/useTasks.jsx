import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Base_Url } from "../api/api";
import { config } from "../api/headerConfig";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTasks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getTasks = async (page,limit) => {
    try {
      setLoading(true);
      const response = await axios.get(`${Base_Url}tasks/all-tasks`, config);
      setLoading(false);
      setTasks(response.data.tasks);console.log(response.data.tasks)
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  };
  const createTasks = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${Base_Url}tasks/add-task`,
        userData,
        config
      );
      setLoading(false);
      setAddTasks(response.data);
      toast.success("تم انشاء المهمة بنجاح ", {
        icon: "👏",
        disableTimeOut: false,
        titleClass: "toaster_title",
        messageClass: "toaster_messge",
        timeOut: 5000,
        closeButton: true,
      });
    } catch (error) {
      setLoading(false);
      toast.error("انتبه - لم يتم انشاء المهمة", {
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
  const deleteTasks = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${Base_Url}tasks/delete-task/${id}`,
        config
      );
      setLoading(false);
      setAddTasks(response.data);
      toast.success("تم حذف المهمة بنجاح ", {
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
  const updateTasks = async (id) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${Base_Url}tasks/edit-task/ ${id}`,
        config
      );
      setLoading(false);
      setAddTasks(response.data);
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
  return { getTasks, tasks, updateTasks, deleteTasks, isLoading, createTasks };
};
