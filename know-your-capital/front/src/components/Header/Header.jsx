import "./Header.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Hamburger } from "./Hamburger";

export const HeaderComponent = ({ user = null }) => {
  const isAuthenticated = user !== null;
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="left">
        <h2>
          <a href="/">Know The Capital</a>
        </h2>
      </div>
      <Hamburger onClick={toggleMenu} />
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li>
            <Link to="/games/play-mode" onClick={closeMenu}>
              Play
            </Link>
          </li>
          <li>
            <Link to="/games/learn-mode" onClick={closeMenu}>
              Learn
            </Link>
          </li>
          <li>
            <Link to="/games/top" onClick={closeMenu}>
              Top Games
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to={`/user/${user._id}`} onClick={closeMenu}>
                  User
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/auth/register" onClick={closeMenu}>
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

HeaderComponent.propTypes = {
  user: PropTypes.object,
};
