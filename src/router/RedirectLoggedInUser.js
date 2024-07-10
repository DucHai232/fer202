import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadFromLocalstorage } from "../utils/LocalStorage";

const RedirectLoggedInUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = loadFromLocalstorage("user");
    if (user) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, []);

  return null;
};

export default RedirectLoggedInUser;
