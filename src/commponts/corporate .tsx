import banner3 from '../pages/tech-brand-working-sustainability-goals_52683-145426.avif'
import banner4 from '../pages/Bangkok-1.webp'
import banner5 from '../pages/group-friends-making-barbecue-nature-260nw-1100824838.webp'
import banner15 from '../pages/1690199856774.jpeg'
import '../style/corporate.css'
import { Link } from 'react-router-dom'
function Corporate() {
    return (
        <>

            <div className="iscorporate">
                <div className="corporate-Header">
                    <h1>Corporate Events</h1>
                </div>

                <div className="co-event">
                    <div className='cor-meeting'>
                        <img src={banner3} />
                        <h3>Meeting</h3>
                        <p>Amora Event Design provides beautiful and memorable decorations for your meetings. We bring your vision to life with table decor, lighting, and stage design. Let us transform your events into extraordinary experiences.
                        </p>
                    </div>
                    <div className='cor-batchelor'>
                        <img src={banner5} />
                        <h3>Batchelor Parties</h3>
                        <p>Amora Event Design creates beautiful and unforgettable decorations for your Batchelor Parties. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.
                        </p>
                    </div>
                    <div className='cor-gether'>
                        <img src={banner4} />
                        <h3>Get together</h3>
                        <p>Amora Event Design creates beautiful and unforgettable decorations for your get-togethers. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.
                        </p>
                    </div>
                    <div className='cor-launches'>
                        <img src={banner15} />
                        <h3>Product Launches</h3>
                        <p>Amora Event Design creates beautiful and unforgettable decorations for your Product Launches. We transform your ideas into reality with personalized decor, cozy seating arrangements, and ambient lighting. Let us make your gatherings memorable and enjoyable for everyone.
                        </p>
                    </div>
                </div>
                <div className="coporate-but">
                    <Link to="/booking" > <button>Book Now!</button></Link>
                </div>

            </div>

        </>
    )
}
export default Corporate