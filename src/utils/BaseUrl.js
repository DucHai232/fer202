import axios from "axios";

export const baseUrl = () => {
  return axios.create({
    baseURL: "https://668d43da099db4c579f2593d.mockapi.io/",
  });
};
