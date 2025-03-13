// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import banner from "../assets/AMORA_Event_Designs_Transparent.png";
// import "../style/NavBar.css";
// import { UseAuth } from "../context/auathcontext";

// function NavBar() {
//   const { getUser, profile, signout } = UseAuth();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       await getUser();
//     };

//     // Run once when the component mounts
//     checkAuthStatus();
//   }, []);

//   useEffect(() => {
//     setIsLoggedIn(profile.username !== "");
//   }, [profile]);

//   return (
//     <div className="nav-Page">
//       <div className="nav-left">
//         <img src={banner}/>
//       </div>

//       <div className="nav-center">
//         <ul className="nav-include">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/service">Services</Link></li>
//           <li><Link to="/booking">Booking</Link></li>
//         </ul>
//       </div>

//       <div className="nav-right">
//         {!isLoggedIn ? (
//           <>
//             <button className="auth-button"><Link to="/register">Register</Link></button>
//             <button className="auth-button"><Link to="/signin">Sign In</Link></button>
//           </>
//         ) : (
//           <button className="auth-button" onClick={signout}>Sign Out</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import banner from "../assets/AMORA_Event_Designs_Transparent.png";
import "../style/NavBar.css";
import { UseAuth } from "../context/auathcontext";

function NavBar() {
  const { getUser, profile, signout } = UseAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuthStatus = async () => {
      await getUser();
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    setIsLoggedIn(profile.username !== "");
  }, [profile]);

  const navbarStyle = {
    backgroundColor: location.pathname === "/" ? "black" : "#4e0542fb",
  };

  return (
    <div className="nav-Page" style={navbarStyle}>
      <div className="nav-left">
        <img src={banner} />
      </div>

      <div className="nav-center">
        <ul className="nav-include">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        {!isLoggedIn ? (
          <>
            <button className="auth-button"><Link to="/register">Register</Link></button>
            <button className="auth-button"><Link to="/signin">Sign In</Link></button>
          </>
        ) : (
          <button className="auth-button" onClick={signout}>Sign Out</button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
