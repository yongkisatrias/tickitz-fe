import "./style/App.css";
import "./style/App.mobile.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChooseSeat from "./pages/ChooseSeat";
import ForgotPassword from "./pages/Forgot-Password";

// list pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/detail/:slug",
    element: <Detail />,
  },
  {
    path: "/choose-seat/:slug",
    element: <ChooseSeat />,
  },
]);

function App() {
  // register to the application
  return <RouterProvider router={router} />;
}

export default App;
