import "./App.css";
import { HeaderComponent } from "./components/Header/Header";
import { FooterComponent } from "./components/Footer/Footer";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";

function AppContent() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <>
      <HeaderComponent user={user} />
      <main>
        {location.pathname === "/" && (
          <section className="title">
            <h1>Know The Capital</h1>
            <p>
              Learn and Know the capitals of all the countries in the world!
            </p>
            <section className="buttons">
              <Link to="/game/play-mode">Play Mode - Guess All Capitals</Link>
              <Link to="/game/learn-mode">Learn Mode - Learn The Capitals</Link>
            </section>
          </section>
        )}
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}

function App() {
  const user = JSON.parse(sessionStorage.getItem("user")) || null;

  return (
    <AuthProvider initialUser={user}>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
