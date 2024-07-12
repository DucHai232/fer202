import { loadFromLocalstorage, saveLocalstorage } from "../utils/LocalStorage";
import dataActors from "../dataSource/actors.json";
export const getActors = () => {
  const storedActors = loadFromLocalstorage("actors");
  if (!storedActors) {
    saveLocalstorage("actors", dataActors);
    return dataActors;
  }
  return storedActors;
};

export const createActor = (newActor) => {
  try {
    const actors = loadFromLocalstorage("actors") || [];
    const newActorId = `actor-id-${actors.length + 1}`;
    const actorToAdd = { id: newActorId, ...newActor };
    actors.push(actorToAdd);
    saveLocalstorage("actors", actors);
    return {
      success: true,
      message: "Thêm diễn viên vào phim thành công",
      actor: actorToAdd,
    };
  } catch (error) {
    console.error("Lỗi khi thêm", error);
    return { success: false, message: "Lỗi khi thêm" };
  }
};

export const deleteActor = (actorId) => {
  try {
    const actors = loadFromLocalstorage("actors") || [];
    const updateActors = actors.filter((actor) => actor.id !== actorId);
    saveLocalstorage("actors", updateActors);
    return { success: true, message: "Xóa thành công" };
  } catch (error) {
    console.error("Lỗi khi xóa", error);
    return { success: false, message: "Đã xảy ra lỗi khi xóa" };
  }
};

export const getActorById = (actorId) => {
  const storedActors = loadFromLocalstorage("actors") || dataActors;
  const actor = storedActors.filter((actor) => actor.id === actorId)[0];
  return actor;
};

export const updateActor = (actorId, data) => {
  try {
    const actors = loadFromLocalstorage("actors") || [];
    const updateActors = actors.map((actor) =>
      actor.id === actorId ? { ...actor, ...data } : actor
    );
    saveLocalstorage("actors", updateActors);
    return {
      success: true,
      message: "Cập nhật thành công",
    };
  } catch (error) {
    console.error("Lỗi khi cập nhật", error);
    return { success: false, message: "Đã xảy ra lỗi khi cập nhật" };
  }
};
