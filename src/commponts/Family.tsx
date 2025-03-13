import banner6 from '../pages/Becca-John-at-The-Gardens-Enchanting-MN-Fall-Wedding-16.jpg'
import banner7 from '../pages/7ebcfbd039cd9cf46744d2aabec22402.jpg'
import banner8 from '../pages/81FirJI1XhL._UF350,350_QL80_.jpg'
import Engage from '../pages/843a7077856a0ab6032a7dff8669c9ae.jpg'
import '../style/Family.css'
import { Link } from 'react-router-dom'
function Family(){
    return(
        <>
        <div className='isfamily'>
            <div className="family-Header">
                <h1>Family Events</h1>
            </div>
            <div className="fa-event">
                <div className='fam-wedding'>
                    <img src={banner6} />
                    <h3>Wedding</h3>
                    <p>Amora Event Design specializes in creating breathtaking and unforgettable decorations for your wedding. We bring your dream celebration to life with elegant themes, stunning floral arrangements, and personalized details. 
                    </p>
                </div>
                <div className='fam-anniversary'>
                <img src={banner8} />
                    <h3>Anniversary</h3>
                    <p>Amora Event Design specializes in creating breathtaking and unforgettable decorations for your Anniversary. We bring your dream celebration to life with elegant themes, stunning floral arrangements, and personalized details. 
                    </p>
                </div>
                <div className='fam-birthday'>
                    <img src={banner7}/>
                    <h3>Birthday Parties</h3>
                    <p>Amora Event Design specializes in creating breathtaking and unforgettable decorations for your Birthday Parties. We bring your dream celebration to life with elegant themes, stunning floral arrangements, and personalized details. 
                    </p>
                </div>
                <div className='fam-engagements'>
                    <img src={Engage} />
                    <h3>Engagements</h3>
                    <p>Amora Event Design specializes in creating breathtaking and unforgettable decorations for your Engagements. We bring your dream celebration to life with elegant themes, stunning floral arrangements, and personalized details. 
                    </p>
                </div>
            </div>

            <div className="family-button">
            <Link to="/booking" > <button>Book Now!</button></Link>
            </div>

        </div>
        </>
    )
}
export default Family