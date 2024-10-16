import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { PlayMode } from './pages/game/PlayMode/PlayMode.jsx';
import { LearnMode } from './pages/game/LearnMode/LearnMode.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/play-mode",
    element: <PlayMode />,
  },
  {
    path: "/learn-mode",
    element: <LearnMode />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);