import "./Header.css";

export const HeaderComponent = () => {
  return (
    <header>
      <div className="left">
        <h2>Know The Capital</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Play</a>
          </li>
          <li>
            <a href="">Learn</a>
          </li>
          <li>
            <a href="">User</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
