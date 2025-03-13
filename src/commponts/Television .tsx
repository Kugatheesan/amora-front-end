import banner9 from '../pages/award-ceremony-500x500.webp'
import banner10 from '../pages/empty-runway-stage-neon-lights-d-rendering-338542442.webp'
import banner11 from '../pages/gameshow-7-1-66f2fa982de31.jpg'
import music from '../pages/20220912-tips-nonton-konser-pertama-kali-banner.jpg'
import "../style/television.css"
import { Link } from 'react-router-dom'
function Television(){
    return(
        <>
        <div className='istelevision'>
            <div className="television-Header">
                <h1>Television Events</h1>
            </div>
            <div className="te-event">
                <div className='tele-award'>
                    <img src={banner9} />
                    <h3>Award Function</h3>
                    <p>Amora Event Design specializes in crafting sophisticated and unforgettable decorations for your Award functions. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
                <div className='tele-fashion'>
                <img src={banner10}  height={280}/>
                    <h3>Fashion Shows</h3>
                    <p>Amora Event Design specializes in crafting sophisticated and unforgettable decorations for your Fashion Shows. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
                <div className='tele-game'>
                <img src={banner11} height={270}/>
                    <h3>Game Shows</h3>
                    <p>Amora Event Design specializes in crafting sophisticated and unforgettable decorations for your Game Shows. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
                <div className='tele-music'>
                <img src={music}/>
                    <h3>Music Shows</h3>
                    <p>Amora Event Design specializes in crafting sophisticated and unforgettable decorations for your Music Shows. We bring recognition and celebration to life with elegant themes, stunning centerpieces, and tailored details.
                    </p>
                </div>
            </div>
            <div className="television-button">
            <Link to="/booking" > <button>Book Now!</button></Link>
            </div>

        </div>
        </>
    )
}
export default Television