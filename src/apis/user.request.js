import { baseUrl } from "../utils/BaseUrl";

const API = baseUrl();
export const getUser = () => {
  return API.get("/user");
};

export const register = (data) => {
  return API.post("/user", data);
};
