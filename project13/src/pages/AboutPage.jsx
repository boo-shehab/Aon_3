import { Link, NavLink, useNavigate } from "react-router-dom"

const AboutPage = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/");
    }

    return (
        <div>
            About page <button onClick={goToHomePage}>Go do home page</button>
                <NavLink to='/about' >Go to about page</NavLink>
        </div>
    )
}

export default AboutPage