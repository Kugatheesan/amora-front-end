import banner12 from '../assets/icons8-instagram-48.png'
import banner13 from '../assets/icons8-facebook-48.png'
import banner14 from '../assets/icons8-youtube-48.png'
import banner from '../assets/AMORA_Event_Designs_Transparent.png'
import '../style/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo'>
                    <img src={banner} />
                    <div>
                        <h1 id='footer-h1'>Amora</h1>
                        <h2 id='footer-h2'> Event Design</h2>
                    </div>
                </div>

                <div className="fo-link">
                    <ul>
                        <h2>Links:</h2>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/service'>Services</Link></li>
                        <li><Link to='booking'>Booking</Link></li>
                        <li><Link to='login'>Register</Link></li>
                    </ul>
                </div>
                <div className="fo-connect">
                    <h2>Connect Us:</h2>
                    <h3>+94 76 046 2103</h3>
                    <h3><a href="">vkugatheesan@gmail.com</a></h3>
                    <h3>Chunnakam south Chunnakam ,Jaffna</h3>
                </div>
                <div className="fo-socialmedia">
                    <a href="https://www.instagram.com/kuga_theesan19?igsh=MXVqd2RraDlwMjUybQ%3D%3D&utm_source=qr" target="_blank" ><img src={banner12} /></a>
                    <a href="https://www.facebook.com/share/18TXwanQG3/?mibextid=wwXIfr" target="_blank"><img src={banner13} /></a>
                    <a href="https://youtube.com/@vigineswarankugatheesan?si=lUVGoyLJFopKWIZty" target="_blank"><img src={banner14} /></a>

                </div>
            </div>
        </>
    )
}

export default Footer