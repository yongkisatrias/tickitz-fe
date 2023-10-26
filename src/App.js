import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

// list pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:slug",
    element: <Detail />,
  },
]);

function App() {
  // register to the application
  return <RouterProvider router={router} />;
}

export default App;
