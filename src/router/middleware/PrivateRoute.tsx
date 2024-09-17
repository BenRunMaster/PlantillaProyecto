import { ComponentType, useContext } from "react"
import { PublicRoutes } from '../config/index';
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

interface PrivateRouteProps {
    element: ComponentType,
    authorization: number[]
}

export const PrivateRoute = ({ element: Element, authorization }: PrivateRouteProps) => {
    const { authContext } = useContext(UserContext)

    const isAuthorizated = !!authContext.token;
    const isAllowed = authorization.includes(authContext.rol);

    return isAllowed && isAuthorizated ? <Element /> : <Navigate to={PublicRoutes.LOGIN} />
}