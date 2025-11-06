import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { PlayMode } from "./pages/game/PlayMode";
import { LearnMode } from "./pages/game/LearnMode";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { User } from "./pages/user";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Country } from "./pages/game/PlayMode/Country/index.jsx";
import { EditUser } from "./pages/user/EditUser/index.jsx";
import { AllGames } from "./pages/user/AllGames/index.jsx";
import { TopGames } from "./pages/game/TopGames/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "games",
        element: <Outlet />,
        children: [
          {
            path: "play-mode",
            element: <PlayMode />,
          },
          {
            path: ":gameId/:countryId",
            element: <Country />,
          },
          {
            path: "learn-mode",
            element: <LearnMode />,
          },
          {
            path: "top",
            element: <TopGames />,
          },
        ],
      },
      {
        path: "/auth",
        element: <Outlet />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/user",
        element: <Outlet />,
        children: [
          {
            path: ":id",
            element: <User />,
          },
          {
            path: ":id/edit",
            element: <EditUser />,
          },
          {
            path: ":id/all-games",
            element: <AllGames />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
