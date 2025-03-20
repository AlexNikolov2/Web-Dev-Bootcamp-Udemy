import { useAuth } from "../../contexts/AuthContext.jsx";
import "./Header.css";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext?.user;
  console.log(authContext);

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
            <Link to="/">User</Link>
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
};
