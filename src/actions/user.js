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

export const banedUser = (userId) => {
  const storedUsers = loadFromLocalstorage("users") || dataUser;
  const user = storedUsers.find((user) => user.id === userId);
  if (user && user.status == false) {
    alert("Tài khoản này đã bị vô hiệu hóa");
    return true;
  }

  return false;
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

export const changePassword = (passwordOld, passwordNew) => {
  try {
    let users = loadFromLocalstorage("users") || [];
    const userToUpdate = users.find((user) => user.password === passwordOld);

    if (!userToUpdate) {
      return { success: false, message: "Mật khẩu cũ không đúng" };
    }
    userToUpdate.password = passwordNew;
    saveLocalstorage("users", users);

    return { success: true, message: "Đổi mật khẩu thành công" };
  } catch (error) {
    console.error("Lỗi khi sửa mật khẩu", error);
    return { success: false, message: "Đã xảy ra lỗi khi sửa mật khẩu" };
  }
};
