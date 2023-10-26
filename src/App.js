import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

// list pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
<<<<<<< Updated upstream
=======
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
>>>>>>> Stashed changes
    path: "/detail/:slug",
    element: <Detail />,
  },
]);

function App() {
  // register to the application
  return <RouterProvider router={router} />;
}

export default App;
