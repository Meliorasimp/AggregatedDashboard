import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
];

export default routes;
