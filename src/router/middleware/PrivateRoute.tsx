import { useContext } from "react"
import { PublicRoutes, Roles } from '../config/index';
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const PrivateRoute = () => {
    const { authContext } = useContext(UserContext)

    const isAuthorizated = !!authContext.token;
    const isAllowed = Roles.inventorio.includes(authContext.rol);

    if (!isAllowed || !isAuthorizated) {
        return <Navigate to={PublicRoutes.LOGIN} />
    }

    return <Outlet />;
}