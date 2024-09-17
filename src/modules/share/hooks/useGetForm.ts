import { ChangeEvent, useState } from "react"

export const useGetForm = <T extends object>() => {
    const [formData, setForm] = useState<Partial<T>>({})
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return {
        handleForm,
        formData,
        ...formData
    }
}