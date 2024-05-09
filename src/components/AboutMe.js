import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        <section id="about" className="content-container reveal">
            <div className="aboutme-container">
                <h3 id="aboutme-title">1. About Me</h3>
                <p>Hey there! I’m Luke, a software enthusiast that enjoys building things on the web and delving into the world of artificial intelligence. I did my Bachelor of Science at the University of Newcastle, where I majored in Physics and graduated with a GPA of 6.7/7.0. I’m currently in my final year of my Master’s in Computer Science at Monash University.</p>
                <p>Proficient in many programming languages, I’m eager to put my knowledge and skills to the test in a hands-on internship. Some of the programming languages I enjoy using are</p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Swift</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div>
                <h1>Image of myself will go here</h1>
            </div>
        </section>
    )
}

export default AboutMe;