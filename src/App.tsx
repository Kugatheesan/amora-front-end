import "./App.css";
import NavBar from "./commponts/NavBar";
import Home from "./commponts/Home";
import About from "./commponts/About";
import Register from "./commponts/Register";
import Booking from "./commponts/Booking";
import Footer from "./commponts/Footer";
import Service from "./commponts/Services";
import { Route, Routes } from "react-router-dom";
import Corporate from "./commponts/corporate ";
import Family from "./commponts/Family";
import Television from "./commponts/Television ";
import Signin from "./commponts/Signin";
import ForgotPassword from "./commponts/ ForgotPassword";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service/corporate" element={<Corporate />} />
                <Route path="/service/family" element={<Family />} />
                <Route path="/service/television" element={<Television />} />
                <Route path="/booking" element={<Booking />} />   
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/forgot" element={<ForgotPassword onCancel={() => {}} />} />
              
            </Routes>
            <Footer />

            <ToastContainer 
                position="top-right"
                autoClose={3000} 
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
