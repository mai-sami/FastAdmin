import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config/api";
import { config } from "../config/headerConfig";

export const useGetData = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [promo, setPromoCode] = useState([]);
  const [influencers, setInfluencers] = useState([]);

  const [closedTicket, setClosedTicket] = useState([]);
  const [openTicket, setOpenTicket] = useState([]);

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const GetAdminDashboardDetailss = async (config) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/admin/dashboard`, config);
      setLoading(false);
      setData(response.data);
      localStorage.setItem("CountDeatilsPublic", JSON.stringify(response.data));
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getAdminUser = async (current_page = 1, search = "", status = "") => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/admin/users?page=${current_page}&search=${search}&status=${status}`,
        config
      );
      setLoading(false);
      setUser(response.data.data);
      console.log(response.data.data, "all users");
      localStorage.setItem("userCount", JSON.stringify(response.data.data));
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getAdminInfluencer = async (current_page = 1, search = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/admin/influencers?page=${current_page}&search=${search}`,
        {
          params: config,
        }
      );
      setLoading(false);
      setInfluencers(response.data.data);
      localStorage.setItem("Influencers", JSON.stringify(response.data.data));
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const getAdminPromoCode = async (current_page, search = "") => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/admin/promo-codes?page=${current_page}&search=${search}`,
        {
          params: config,
        }
      );
      setLoading(false);
      localStorage.setItem("PromoCode", JSON.stringify(response.data));
      setPromoCode(response.data.data, "PromoCode");
      console.log(response, "all PromoCode");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  const getAdminClosrdTicket = async (current_page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/admin/support/closed?page=${current_page}`,
        {
          params: config,
        }
      );
      setLoading(false);
      // console.log(response, "setClosedTicket");
      setClosedTicket(response.data.data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  const getAdminOpenTicket = async (current_page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/admin/support/open?page=${current_page}`,
        {
          params: config,
        }
      );
      setLoading(false);
      // console.log(response.data.data, "setOpenTicket");
      setOpenTicket(response.data.data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return {
    user,
    promo,
    closedTicket,
    openTicket,
    getAdminClosrdTicket,
    getAdminOpenTicket,
    getAdminUser,
    getAdminPromoCode,
    isLoading,
    GetAdminDashboardDetailss,
    getAdminInfluencer,
    influencers,
  };
};
