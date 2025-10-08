import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { login as loginService } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

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

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
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
