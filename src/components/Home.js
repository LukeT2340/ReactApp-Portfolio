import "../styles/Home.css";

const Home = () => {
    return (
        <section id="home" className="content-container reveal">
            <div className="introduction-container">
                <h4 id="my-name-is-text">Hi, my name is</h4>
                <h1 id="my-name-text">Luke Thompson.</h1>
                <h1 id="what-i-do-text">I build mobile apps and websites.</h1>
                <h5 id="blurb-text">I'm a Computer Science Student specializing in Artificial Intelligence. During my spare time I build websites and IOS applications. Currently in pursuit of an internship.</h5>
                <a className="contact-me-button" href="#contact">Contact me!</a>
            </div>
        </section>
    )
}

export default Home;