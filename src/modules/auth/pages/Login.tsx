import { useContext, useEffect } from "react"
import { Button, Input } from "../../share/components"
import { useGetForm } from "../../share/hooks/useGetForm"
import { WrapperLogin } from "../components"
import { useLogin } from "../service/useLogin"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"

interface FormProps {
    email: string,
    password: string
}

export const Login = () => {
    const { authContext } = useContext(UserContext)
    const navigate = useNavigate()
    const { handleForm, email, password } = useGetForm<FormProps>()
    const { makeRequest } = useLogin()

    const login = async () => {
        if (!!email && !!password) {
            console.log(email, password)
            await makeRequest(email, password)
        } else {
            alert('Completa los campos del formulario');
        }
    }

    useEffect(() => {
        if (!!authContext.urlRedirect) {
            navigate(authContext.urlRedirect)
        }
    }, [authContext])

    return (
        <WrapperLogin>
            <div>
                <Input onChange={handleForm} width="80%" name="email" type="text" placeholder="Usuario" />
                <Input onChange={handleForm} width="80%" name="password" type="text" placeholder="Contraseña" />
                <Button onClick={login} width="80%">Iniciar sesión</Button>
            </div>
        </WrapperLogin>
    )
}
