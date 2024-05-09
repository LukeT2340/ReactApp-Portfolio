import '../styles/NavBar.css';

// Navigation bar component
const NavBar = () => {
    return (
    <>
        <div className="nav-container">
            <div className="logo">
                <h1><span className="first-name">LUKE</span><span className="last-name">THOMPSON</span></h1>
            </div>
            <div class="links">
                <nav>
                    <ul>
                        <li><a href="#home" id="nav-home-link">HOME</a></li>
                        <li><a href="#about">ABOUT ME</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="https://github.com/LukeT2340"><img src="/GitHub_Logo_White.png" alt="Git hub logo"></img></a></li>
                    </ul>
                </nav>   
            </div>
        </div>
    </>
    )
}

export default NavBar;