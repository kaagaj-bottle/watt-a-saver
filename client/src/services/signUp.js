import axios from "axios";
const baseUrl = "http://localhost:6500/api/v1/users";

export const signUp = async (userObj) => {
  const response = await axios.post(baseUrl, userObj);
  return response.data;
};

