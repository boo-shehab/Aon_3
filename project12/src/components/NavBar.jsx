const NavBar = ({text}) => {
    return (
        <>
            <div style={{backgroundColor: '#333'}} className="navbar">
                <p>{text}</p>
                <button>X</button>
            </div>
        </>
    )
}

export default NavBar