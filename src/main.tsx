import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AttendeesPage } from "./pages/attendees.tsx";
import { EventsPage } from "./pages/events.tsx";
import { Home } from "./pages/home.tsx";
import { App } from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "attendees",
        element: <AttendeesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
