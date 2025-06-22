import axios from "axios";
import { useState } from "react";
import { Base_Url } from "../api/api";
import { config } from "../api/headerConfig";
import { TokenAuth } from "../Utils/Users";

export const useUser = (endPiont) => {
  const [user, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${Base_Url}${endPiont}`, config);
      setLoading(false);
      console.log(response, "useUser");
      setUsers(response.data);
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  };
  return { getUsers, isLoading };
};
