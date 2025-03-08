import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const basicRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/sobre", element: <About /> },
  { path: "/servicos", element: <Services /> },
  { path: "/contato", element: <Contact /> },
];

export default basicRoutes;