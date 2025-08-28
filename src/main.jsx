import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
