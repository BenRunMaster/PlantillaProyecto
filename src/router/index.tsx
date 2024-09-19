import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "./config";
import { Login } from "../modules/auth/pages/Login";
import { PrivateRoute } from "./middleware/PrivateRoute";
import { Inventory } from "../modules/inventory/pages/Inventory";
import { AddProduct } from "../modules/inventory/pages/AddProduct";
import { EditProduct } from "../modules/inventory/pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: PublicRoutes.LOGIN,
    element: <Login />,
  },

  {
    path: PrivateRoutes.INVENTORY,
    element: <PrivateRoute />,
    children:[
      {
        path: '',
        element: <Inventory />,
      },
      {
        path: PrivateRoutes.ADDPRODUCT,
        element: <AddProduct />,
      },
      {
        path: PrivateRoutes.EDITPRODUCT,
        element: <EditProduct />,
      },
    ]
  },
  
]);