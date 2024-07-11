import { loadFromLocalstorage, saveLocalstorage } from "../utils/LocalStorage";
import dataFilms from "../dataSource/films.json";
export const getFilms = () => {
  const storedFilms = loadFromLocalstorage("films");
  if (!storedFilms) {
    saveLocalstorage("films", dataFilms);
    return dataFilms;
  }
  return storedFilms;
};

export const getFilmById = (filmId) => {
  const storedFilms = loadFromLocalstorage("films") || dataFilms;
  const film = storedFilms.filter((film) => film.id === filmId)[0];
  return film;
};

export const getFilmReleased = () => {
  const storedFilms = loadFromLocalstorage("films") || dataFilms;
  const films = storedFilms.filter((film) => film.status === "Released");
  return films;
};

export const deleteFilm = (filmId) => {
  try {
    const films = loadFromLocalstorage("films") || [];
    const updatedFilms = films.filter((film) => film.id !== filmId);
    saveLocalstorage("films", updatedFilms);
    return { success: true, message: "Xóa phim thành công" };
  } catch (error) {
    console.error("Lỗi khi xóa phim:", error);
    return { success: false, message: "Đã xảy ra lỗi khi xóa phim." };
  }
};

export const createFilm = (newFilm) => {
  try {
    const newFilmId = `film-${dataFilms.length + 1}`;
    const filmToAdd = { id: newFilmId, ...newFilm };
    dataFilms.push(filmToAdd);
    saveLocalstorage("films", dataFilms);
    return {
      success: true,
      message: "Tạo phim thành công.",
      film: filmToAdd,
    };
  } catch (error) {
    console.error("Lỗi khi tạo phim", error);
    return { success: false, message: "Đã xảy ra lỗi khi tạo phim" };
  }
};

export const updateFilm = (filmId, data) => {
  try {
    const films = loadFromLocalstorage("films") || [];
    const updatedFilms = films.map((film) =>
      film.id === filmId ? { ...film, ...data } : film
    );
    saveLocalstorage("films", updatedFilms);
    return {
      success: true,
      message: "Phim cập nhật thành công.",
    };
  } catch (error) {
    console.error("Lỗi khi cập nhật", error);
    return { success: false, message: "Đã xảy ra lỗi khi cập nhật" };
  }
};

export const commentFilm = (filmId, comment) => {
  try {
    const films = getFilms();
    const updatedFilms = films.map((film) =>
      film.id === filmId
        ? { ...film, comments: [...film.comments, comment] }
        : film
    );
    saveLocalstorage("films", updatedFilms);
    return { success: true, message: "Bình luận đã được thêm thành công." };
  } catch (error) {
    console.error("Lỗi khi thêm bình luận:", error);
    return { success: false, message: "Đã xảy ra lỗi khi thêm bình luận." };
  }
};
