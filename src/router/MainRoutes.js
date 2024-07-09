import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../compoment/auth/login";
import SignUp from "../compoment/auth/signup";
import Home from "../compoment/home/Home";
import Admin from "../compoment/admin";
import Details from "../compoment/detail/Detail";
import Watching from "../compoment/watching/Watching";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/chitiet">
          <Route path=":filmId" element={<Details />} />
          <Route path=":filmId/xem-phim" element={<Watching />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
