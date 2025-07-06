import "./App.css";
import React, { useState } from "react";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import Redirect from "./pages/redirect";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/:id",
        element: <Redirect />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
