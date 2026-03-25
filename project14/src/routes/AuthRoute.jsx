import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const AuthRoute = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const nav = useNavigate()
    useEffect(() => {
        if(user) {
            nav("/")
        }}, [user, nav]);

    return (
        <Outlet />
    )
}

export default AuthRoute