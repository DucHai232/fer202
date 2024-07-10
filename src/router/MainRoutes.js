import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../compoment/auth/login";
import SignUp from "../compoment/auth/signup";
import Home from "../compoment/home/Home";
import Admin from "../compoment/admin/admin";
import Details from "../compoment/detail/Detail";
import Watching from "../compoment/watching/Watching";
import Search from "../compoment/Search";
import { loadFromLocalstorage } from "../utils/LocalStorage";
import RedirectLoggedInUser from "./RedirectLoggedInUser";
import AddMovie from "../compoment/admin/addfilm";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RedirectLoggedInUser />} />
        <Route path="/chitiet">
          <Route path=":filmId" element={<Details />} />
          <Route path=":filmId/xem-phim" element={<Watching />} />
        </Route>
        <Route path="/search" element={<Search />} />
        <Route path="/admin">
          <Route path="" element={<Admin />} />
          <Route path="them-phim" element={<AddMovie />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
