import "./Header.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useAuth } from "../../contexts/AuthContext";

export const HeaderComponent = ({ user }) => {
  const isAuthenticated = user !== null;
  const { logout } = useAuth();

  return (
    <header>
      <div className="left">
        <h2><a href="/">Know The Capital</a></h2>
      </div>
      <nav>
        {isAuthenticated ? <ul>
          <li>
            <Link to="/game/play-mode">Play</Link>
          </li>
          <li>
            <Link to="/game/learn-mode">Learn</Link>
          </li>
          <li>
            <Link to={`/user/${user._id}`}>User</Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>Logout</Link>
          </li>
        </ul> : <ul>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link to="/auth/register">Sign up</Link>
          </li>
        </ul>}
      </nav>
    </header>
  );
}

HeaderComponent.defaultProps = {
  user: null,
};

HeaderComponent.propTypes = {
  user: PropTypes.object,
};