import { useContext, useState } from "react"
import { API } from "../../../config/axios"
import { PrivateRoutes } from "../../../router/config"
import { UserContext } from "../../../context/UserContext"

interface UserProps {
    rol: number,
    token: string,
    urlRedirect: string
}

export const useLogin = () => {
    const { setAuthContext } = useContext(UserContext)
    const [userAuth, setUser] = useState<UserProps>()
    const [error, setError] = useState<any>(null)
    const [isLoading, setLoading] = useState(false)

    const getRol = (email: string) => {
        const rol = email.startsWith('ventas') ? 2 : 1;
        const urlRedirect = email.startsWith('ventas') ? PrivateRoutes.SALES : PrivateRoutes.INVENTORY;
        return {
            rol, urlRedirect
        }
    }

    const makeRequest = async (email: string, password: string) => {
        try {
            setLoading(true);
            const { data } = await API.post('/auth/login', { email, password })
            const { rol, urlRedirect } = getRol(email)
            const userData = {
                token: data.data,
                rol, urlRedirect
            }
            setUser(userData)
            setAuthContext(userData)
            sessionStorage.setItem('session', JSON.stringify(userData))
        } catch (error) {
            // console.log(error)
            setError(error)
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    return {
        makeRequest,
        userAuth,
        error,
        isLoading
    }
}