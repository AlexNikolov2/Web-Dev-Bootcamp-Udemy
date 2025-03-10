import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { PlayMode } from "./pages/game/PlayMode/PlayMode.jsx";
import { LearnMode } from "./pages/game/LearnMode/LearnMode.jsx";
import { Login } from "./pages/auth/Login/Login.jsx";
import { Register } from "./pages/auth/Register/Register.jsx";
import { User } from "./pages/user/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "game",
        element: <Outlet />,
        children: [
          {
            path: "play-mode",
            element: <PlayMode />,
          },
          {
            path: "learn-mode",
            element: <LearnMode />,
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
        path: "/auth",
        element: <Outlet />,
        children: [
          {
            path: ":id",
            element: <User />
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
