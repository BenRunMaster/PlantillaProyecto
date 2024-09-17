import { createContext, useState } from "react";

interface dataUser {
    token: string | null;
    rol: number;
    urlRedirect: string | null;
}
interface PropsContext {
    authContext: dataUser,
    setAuthContext: React.Dispatch<React.SetStateAction<dataUser>>
}

export const UserContext = createContext<PropsContext>({} as PropsContext)
const sessionUser = sessionStorage.getItem('session')
const InitialValue = !!sessionUser ? JSON.parse(sessionUser) : {
    token: null,
    rol: 0,
    urlRedirect: null
}

interface ChildrenProps {
    children: JSX.Element | JSX.Element[]
}
export const StateContext = ({ children }: ChildrenProps) => {
    const [authContext, setAuthContext] = useState(InitialValue as dataUser)
    return (
        <UserContext.Provider value={{ authContext, setAuthContext }}>
            {children}
        </UserContext.Provider>
    )
}
