import React from "react";
import MainRoutes from "./router/MainRoutes";
import Details from "./compoment/detail/Detail";
import Watching from "./compoment/watching/Watching";
import Search from "./compoment/Search";
import AddMovie from "./compoment/admin/addfilm";

const App = () => {
  return (
    <div>
      {/* <Details />
      <ChangePasswordPage />
      <ForgotPasswordPage />
  
      <Watching />
      <Search />
      <DetailUser />
      <DetailMovie />
      <AddMovie />
      <UpdateUser /> */}
      {/* <Details /> */}

      <MainRoutes />
    </div>
  );
};

export default App;
