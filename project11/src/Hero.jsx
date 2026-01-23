const Hero = ({ thisText, children }) => {
    return (
        <>
            <section className="hero">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                <p>{thisText}</p>
                {children}
            </section>
        </>
    )
}

export default Hero