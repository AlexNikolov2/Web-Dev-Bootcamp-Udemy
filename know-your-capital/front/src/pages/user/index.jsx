import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { MyUser } from "./MyUser";
import { ForeignUser } from "./ForeignUser";

export const User = () => {
  const { id } = useParams();
  const { user: localUser } = useAuth();

  if (localUser && localUser._id === id) {
    return <MyUser />;
  } else {
    return <ForeignUser />;
  }
};
