import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { login as loginService } from "../services/authService";
import { editUser as editUserService } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

  console.log({ user });

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (userData) => {
    const response = await loginService(userData);
    setUser(response.user);
    sessionStorage.setItem("user", JSON.stringify(response.user));
  };

  const edit = async (userData) => {
    const response = await editUserService(userData, user._id);
    setUser(response);
    sessionStorage.setItem("user", JSON.stringify(response));
    return response;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, edit, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialUser: PropTypes.object,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
