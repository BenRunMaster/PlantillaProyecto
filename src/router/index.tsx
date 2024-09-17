import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "./config";
import { Login } from "../modules/auth/pages/Login";
import { PrivateRoute } from "./middleware/PrivateRoute";
import { Inventory } from "../modules/inventory/pages/Inventory";

export const router = createBrowserRouter([
  {
    path: PublicRoutes.LOGIN,
    element: <Login />,
  },

  {
    path: PrivateRoutes.INVENTORY,
    element: <PrivateRoute element={Inventory} authorization={Roles.inventorio} />,
  },
]);