import { Link, Outlet } from "react-router-dom";

const MainRoute = () => {
    return (
        <>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/about/me'>About me</Link>
                <Link to='/profile/12'>profile</Link>
            </div>
            <main>

                <Outlet />
            </main>
        </>
    )
}

export default MainRoute;