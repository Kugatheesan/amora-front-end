import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "../style/Signin.css";
import ForgotPassword from "../commponts/ ForgotPassword";
import { BE_URL } from '../utils/Constant';

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BE_URL}/users/login`, { username, password }, { withCredentials: true });
            if (response.status === 200) {
                toast.success("Sign in successful!", { theme: "dark", autoClose: 2000 });
                setTimeout(() => {
                    setUsername("");
                    setPassword("");
                    navigate("/");
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            toast.error("Invalid username or password!", { theme: "dark", autoClose: 2000 });
            setTimeout(() => {
                setUsername("");
                setPassword("");
                navigate("/signin");
                window.location.reload();
            }, 2000);
        }
    };

    return (
        <div className="signin-container">
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            
            <div className="signin-content">
                <div className="welcome-section">
                    <h2>WELCOME</h2>
                    <p><span>Sign in</span></p>
                    <p className="subtitle">Sign in to access seamless event planning and exclusive booking features. Your dream event is just a click away</p>
                </div>

                <div className="signin-box">
                    <h3>Sign in</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="User Name" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit" className="signin-btn">Sign in</button>.
                        
                        <div className="remember-forgot">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setShowForgotPassword(true);
                            }}>Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>

            {showForgotPassword && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setShowForgotPassword(false)}>✖</button>
                        <ForgotPassword onCancel={() => setShowForgotPassword(false)} />
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Signin;