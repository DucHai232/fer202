import { baseUrl } from "../utils/BaseUrl";

const API = baseUrl();
export const getFilmData = () => {
  return API.get("/film");
};

export const postCommentFilm = (id, data) => {
  return API.put(`/film/${id}`, data);
};

export const uploadFilmToServer = (data) => {
  return API.post("/film", data);
};
