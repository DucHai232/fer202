import dataUser from "../dataSource/users.json";
import { loadFromLocalstorage, saveLocalstorage } from "../utils/LocalStorage";

export const getUser = () => {
  const storedUsers = loadFromLocalstorage("users");
  if (!storedUsers) {
    saveLocalstorage("users", dataUser);
    return dataUser;
  }
  return storedUsers;
};

export const getUserById = (userId) => {
  const storedUsers = loadFromLocalstorage("users") || dataUser;
  const user = storedUsers.filter((user) => user.id === userId)[0];
  return user;
};

export const createUser = (newUser) => {
  try {
    const newUserId = `user-id-${dataUser.length + 1}`;
    const userToAdd = { id: newUserId, ...newUser };
    dataUser.push(userToAdd);
    saveLocalstorage("users", dataUser);
    return {
      success: true,
      message: "Đăng ký thành công.",
      user: userToAdd,
    };
  } catch (error) {
    console.error("Lỗi khi tạo người dùng:", error);
    return { success: false, message: "Đã xảy ra lỗi khi tạo người dùng." };
  }
};

export const deleteUser = (userId) => {
  try {
    const users = loadFromLocalstorage("users") || [];
    const updatedUsers = users.filter((user) => user.id !== userId);
    saveLocalstorage("users", updatedUsers);
    return { success: true, message: "Người dùng đã được xóa thành công." };
  } catch (error) {
    console.error("Lỗi khi xóa người dùng:", error);
    return { success: false, message: "Đã xảy ra lỗi khi xóa người dùng." };
  }
};

export const updateUser = (userId, data) => {
  try {
    const users = loadFromLocalstorage("users") || [];
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...data } : user
    );
    saveLocalstorage("users", updatedUsers);
    return {
      success: true,
      message: "Người dùng đã được cập nhật thành công.",
    };
  } catch (error) {
    console.error("Lỗi khi sửa người dùng:", error);
    return { success: false, message: "Đã xảy ra lỗi khi sửa người dùng." };
  }
};
