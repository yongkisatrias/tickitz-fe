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
    path: "/detail/:id",
    element: <Detail />,
  },
]);

function App() {
  // register to the application
  return <RouterProvider router={router} />;
}

export default App;
