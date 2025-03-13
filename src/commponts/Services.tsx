import '../style/Services.css'
import cor from '../assets/ser-cor.jpg'
import fam from '../assets/ser-family.jpg'
import tele from '../assets/ser-television.webp'
import { Link } from 'react-router-dom'

function Service() {
    return (
        <>
            <div className="all-service">
                <div className="ser-head">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="All-event">
                    <div className="event-container">
                        <div className="event-card">
                            <Link to="/service/corporate">
                                <img src={cor} alt="Corporate Events" />
                                <h3>Corporate Events</h3>
                                <p>Amora Event Design offers customized corporate services to make your business events exceptional.</p>
                                <button className="view-details-btn">View Details</button>
                            </Link>
                        </div>
                        <div className="event-card">
                            <Link to="/service/family">
                                <img src={fam} alt="Family Events" />
                                <h3>Family Events</h3>
                                <p>Celebrate all your family occasions with joy as Amora Event Design provides complete family event services tailored to your needs.</p>
                                <button className="view-details-btn">View Details</button>
                            </Link>
                        </div>
                        <div className="event-card">
                            <Link to="/service/television">
                                <img src={tele} alt="Television Events" />
                                <h3>Television Events</h3>
                                <p>For television shows and live events, Amora Event Design delivers professional television event services to ensure a seamless experience.</p>
                                <button className="view-details-btn">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
