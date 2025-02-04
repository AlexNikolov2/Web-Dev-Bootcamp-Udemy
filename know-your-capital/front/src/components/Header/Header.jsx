import "./Header.css";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const isAuthenticated = false;
  return (
    <header>
      <div className="left">
        <h2>Know The Capital</h2>
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
            <Link to="/auth/register">SIgn up</Link>
          </li>
        </ul>}
      </nav>
    </header>
  );
};
