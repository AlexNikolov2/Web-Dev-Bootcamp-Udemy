import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { MyUser } from "../MyUser";
import { ForeignUser } from "../ForeignUser";

export const User = () => {
  const { id } = useParams();
  const { localUser } = useAuth();

  if (localUser && localUser._id === id) {
    return <MyUser />;
  } else {
    return <ForeignUser />;
  }
};
