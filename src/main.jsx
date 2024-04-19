import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ShopNow from "./Pages/ShopNow.jsx";
import FreeWeights from "./Pages/FreeWeights.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/freeweights",
    element: <FreeWeights />,
  },
  {
    path: "/shopnow",
    element: <ShopNow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
