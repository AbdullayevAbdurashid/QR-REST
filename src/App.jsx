import React from "react";
import "./index.css";
import Menu from "./pages/menu";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Menu />,
    },
    // {
    //   path: "/menu",
    //   element: <Menu />,
    // },
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
