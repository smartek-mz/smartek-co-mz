import { RouteObject } from "react-router-dom";
import MemberDetails from "../pages/MemberDetails";

const memberRoutes: RouteObject[] = [
  { path: "/membro/:uid", element: <MemberDetails /> },
];

export default memberRoutes;