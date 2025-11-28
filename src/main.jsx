import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          color: "var(--text-color)",
          fontSize: "0.95rem",
          borderRadius: "10px",
          backdropFilter: "blur(6px)",
        },
        success: {
          iconTheme: {
            primary: "var(--color-primary)",
            secondary: "#000",
          },
        },
        error: {
          iconTheme: {
            primary: "#ff6b6b",
            secondary: "#000",
          },
        },
      }}
    />
  </>
);
