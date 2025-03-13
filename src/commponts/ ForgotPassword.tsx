import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ForgotPassword.css";
import { BE_URL } from "../utils/Constant";

interface ForgotPasswordProps {
  onCancel: () => void;
}

export function ForgotPassword({ onCancel }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false); //OTP popup not show in false 
  const [otp, setOtp] = useState("");
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BE_URL}/users/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },    //sent the json format ,sent the alert before
        body: JSON.stringify({ email }), // sent the email object in json format
      });

      const data = await res.text(); //save the meesage to server
      setMessage(data);

      if (res.ok) {
        setShowOtpPopup(true); //sent the OTP ,so setShowOtpPopup is true ,OTP page show thu popup
      }
    } catch (error) {
      setMessage("Error sending OTP."); //not set the otp ,and show the meesage
    }
  };

  const handleOtpSubmit = async () => {   //check the OTP ,in sent the server
    try {
      const res = await fetch(`${BE_URL}/users/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (res.ok) {
        setShowOtpPopup(false); // Close OTP popup
        setShowResetPopup(true); // Show Reset Password popup
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error verifying OTP.");
    }
  };

  const handleResetPassword = async () => {  //sent the new password to server
    try {
      const res = await fetch(`${BE_URL}/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
  
      if (res.ok) {
        alert("Password reset successfully!"); // Show success message
        setShowResetPopup(false);
  
        onCancel();
        // Redirect to Sign In page after clicking "OK" on alert
        navigate('/signin');
      } else {
        setMessage("Error resetting password.");
      }
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };
  

  return (
    <div className="forgot-password-wrapper">
      {!showOtpPopup && (
        <>
          <h2 className="forgot-password-title">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="forgot-password-input"
            />
            <button type="submit" className="forgot-password-button">
              Send OTP
            </button>
          </form>
          {message && <p className="forgot-password-message">{message}</p>}
          <button onClick={onCancel} className="forgot-password-cancel">
            Cancel
          </button>
        </>
      )}

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="otp-popup">
          <div className="otp-content">
            <h3>Enter OTP</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="otp-input"
            />
            <button onClick={handleOtpSubmit} className="otp-submit-button">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {/* Reset Password Popup */}
      {showResetPopup && (
        <div className="reset-popup">
          <div className="reset-content">
            <h3>Reset Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="reset-password-input"
            />
            <button onClick={handleResetPassword} className="reset-submit-button">
              Reset Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
