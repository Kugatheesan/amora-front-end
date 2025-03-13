import '../style/About.css';
import banner2 from '../assets/bunch-flowers-leaves-table.webp'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text-section">
                    <h3 className="about-subtitle">ABOUT THIS EVENT</h3>
                    <h1 className="about-title">
                        EXPERIENCE A TRUE EVENT <span>CELEBRATION</span>
                    </h1>
                    <p className="about-description">
                        Welcome to <strong>Amora Event Design</strong>, your trusted partner in creating unforgettable events.
                        We specialize in designing and managing exceptional functions, from elegant weddings and corporate
                        gatherings to lively social celebrations.
                    </p>
                    <p className="about-description">
                        Let us bring your dream event to life with innovation, passion, and excellence.
                    </p>

                    <div className="about-info">
                        <div className="about-location">
                            <p>📍 <strong>Jaffna</strong></p>
                            <p>📞 <strong>+94760462103</strong></p>
                            <p>📧 <strong>amora@gmail.com</strong></p>
                        </div>
                    </div>

                </div>

                <div className="about-media">
                    <div className="about-image">
                        <img src={banner2} alt="Event" />
                    </div>
                    <div className="about-video">
                        <button className="play-button">▶ PLAY TRAILER</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

