import React from "react";
import ReactDom from 'react-dom/client'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
