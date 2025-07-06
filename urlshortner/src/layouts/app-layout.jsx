import React, { useState } from "react";
import { Outlet } from "react-router";
import { TableFooter } from "@mui/material";
import Header from "./header";
const Applayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <main className="main">
        <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <Outlet />
      </main>
      <footer className="footer">Made with Love Shubh Nigam</footer>
    </div>
  );
};

export default Applayout;
