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
import DetailUser from "../compoment/admin/detailsadmin";
import ListFilm from "../compoment/admin/ListFilm";
import UpdateFilm from "../compoment/admin/UpdateFilm";

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
          <Route path="add-film" element={<AddMovie />} />
          <Route path="list-film" element={<ListFilm />} />
          <Route path="update-user/:userId" element={<DetailUser />} />
          <Route path="update-film/:id" element={<UpdateFilm />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
