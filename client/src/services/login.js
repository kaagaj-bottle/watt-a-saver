import axios from "axios";
const baseUrl = "http://localhost:6500/api/v1/users/login";

export const login = async (user) => {
  const response = await axios.post(baseUrl, user);
  return response.data;
};

