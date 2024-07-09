import { baseUrl } from "../utils/BaseUrl";

const API = baseUrl();
export const getUser = () => {
  return API.get("/user");
};
