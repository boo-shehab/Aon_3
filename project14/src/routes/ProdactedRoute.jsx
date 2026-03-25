import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import useUserStore from "../store/useUserStore"

const ProdactedRoute = () => {
    const {user, setUser} = useUserStore();
    
    const nav = useNavigate()
    useEffect(() => {
        setUser()
    }, [])

    useEffect(() => {
        if(!user) {
            nav("/login")
        }}, [user, nav]);

    return (
        <>
        <Outlet />
        </>
    )
}

export default ProdactedRoute