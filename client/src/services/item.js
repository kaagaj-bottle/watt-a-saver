import axios from "axios";
const baseUrl = "http://localhost:6500/api/v1/users/devices";

let token = null;
let config = null;

export const setToken = (newToken) => {

  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

export const getAll = async () => {
  const response = await axios.get(baseUrl, config);
  return response;
};
