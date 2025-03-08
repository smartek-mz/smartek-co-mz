import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import '../styles/globals.css'
import basicRoutes from "./basics";
import segitRoutes from "./segit";
import memberRoutes from "./members";
import notFoundRoute from "./notfound";

const AppRouter: React.FC = () => {
  const routing = useRoutes([...basicRoutes, ...memberRoutes, ...segitRoutes, notFoundRoute]);

  return (
    <HelmetProvider>
      {routing}
    </HelmetProvider>
  );
};

export default AppRouter;
