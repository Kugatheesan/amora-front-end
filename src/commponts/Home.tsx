import '../style/Home.css'
import whatsapp from "../assets/icons8-whatsapp-48.png"
import dest from '../assets/perfect-destination-wedding-venues-sri-lanka.webp'
import unique from '../assets/weddings-photos-in-sri-lanka.webp'
import stress from '../assets/lassana-flora-weddings-sri-lanka.webp'
import para1 from '../assets/Planning-1.webp'
import para2 from '../assets/time-management-dreamstime.jpg'
import centerimg from "../assets/Amora(2).png"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <> 
        <div className='main'>
            <div className="Header">
                <h1>Amora  </h1>
                <h2 className='outline'>Event Management</h2>
                <h2 className='tagline'>Turning Moments into Memories</h2>

                <div className='whatsapp'>
                    <a href="https://wa.me/94760462103?text=Hello%20there!">
                        <img src={whatsapp} className='whatsapp-img' />
                    </a>
                </div>
            </div>
<div className="info-container">
    <div className="info-container02">

        <section className="info-block">
            <div className="text-content">
                <h2>What is Event Planning?</h2>
                <p>
                    Event planning involves organizing festivals, ceremonies, competitions, parties, and conventions, covering budgeting, venue selection, permits, logistics, decor, security, and more.
                    The industry ranges from global events like the Olympics to small business meetings, helping organizations build relationships, raise funds, and celebrate.
                    In Sri Lanka, many event planners exist, but only a few deliver premium results—choose a well-reputed company to make your dream event a success.
                </p>
            </div>
            <div className="image-container">
                    <img src={para1} alt="Event Planning" />
                </div>
        </section>

        <div className="centerimage-container">
            <img src={centerimg} alt="Event Planning & Time Management" />
        </div>

    
        <section className="info-block">
            <div className="text-content">
                <h2>What is Time Management?</h2>
                <p>
                    Time management is the process of planning and controlling how time is spent on tasks to enhance efficiency, productivity, and effectiveness.
                    It involves using various skills, tools, and techniques to prioritize tasks, meet deadlines, and balance work and personal activities.
                    Essential in project development, time management ensures timely completion and optimal resource utilization for better outcomes.
                </p>
            </div>

            <div className="image-container">
                    <img src={para2} alt="Event Planning" />
                </div>

        </section>
    </div>
</div>

            <div className="extera-add">
                <div className="front-page">
                    <img src={dest} alt="Destination Weddings" />
                    <h3>Destination Weddings</h3>
                    <p>Amora Event offers the best destination wedding packages for both foreigners and locals in Sri Lanka and beyond.</p>
                    <Link to="/service">Read More</Link>
                </div>
                <div className="front-page">
                    <img src={unique} alt="Unique Scenarios" />
                    <h3>Unique Scenarios</h3>
                    <p>Experience uniqueness throughout your event management process with our innovative "out of the box" approach.</p>
                    <Link to="/service">Read More</Link>
                </div>
                <div className="front-page">
                    <img src={stress} alt="Stress Free" />
                    <h3>Stress-Free</h3>
                    <p>Let Amora Event handle your event stress while you focus on other important things in life.</p>
                    <Link to="/service">Read More</Link>
                </div>
            </div>
            </div>
        </>
    )
}
export default Home;
