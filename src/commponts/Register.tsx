import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/Register.css";
import { BE_URL } from "../utils/Constant";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BE_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                toast.success("Registration successful!", { theme: "dark", autoClose: 2000 });
                setTimeout(() => {
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    navigate("/signin");
                }, 2000);
            } else {
                toast.error("Registration failed!", { theme: "dark", autoClose: 2000 });
            }
        } catch (error) {
            toast.error("An error occurred!", { theme: "dark", autoClose: 2000 });
        }
    };

    return (
        <div className="register-container">
            <div className="background-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="register-content">
                <div className="welcome-section">
                    <h2>WELCOME</h2>
                    <p><span>Register</span></p>
                    <p className="subtitle">Sign up to access seamless event planning and exclusive booking features. Your dream event starts here.</p>
                </div>

                <div className="register-box">
                    <h3>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="User Name" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </div>
                        <button type="submit" className="register-btn">Register</button>

                        <div className="signin-link">
                            Already have an account? <a href="/signin">Sign in</a>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
