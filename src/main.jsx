import "@babel/polyfill";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import AuthProvider from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

// import { AuthProvider } from "./context/AuthContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
