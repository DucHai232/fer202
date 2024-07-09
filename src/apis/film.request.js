import { baseUrl } from "../utils/BaseUrl";

const API = baseUrl();
export const getFilmData = () => {
  return API.get("/film");
};
