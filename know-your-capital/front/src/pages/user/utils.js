import { getUser } from "../../services/userService";

export const getNonOwnedUser = async (id) => {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
