import { TokenAuth } from "../utils/Users";

export const config = {
  headers: {
    Authorization: `Bearer ${TokenAuth}`,
  },
};
