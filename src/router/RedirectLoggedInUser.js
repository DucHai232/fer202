import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadFromLocalstorage } from "../utils/LocalStorage";

const RedirectLoggedInUser = () => {
  const navigate = useNavigate();

  const user = loadFromLocalstorage("user");
  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [user, navigate]);

  return null;
};

export default RedirectLoggedInUser;
