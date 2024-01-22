import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./COMPONENTS/Header.jsx";
import Navbar from "./COMPONENTS/NavBar/Navbar.jsx";
import Footer from "./COMPONENTS/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
