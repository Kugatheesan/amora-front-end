import { useState, useContext, useEffect } from 'react';  //useContext-contect with pages , useEffect-page load
import '../style/Booking.css';
import { ServiceContext, ServiceContextType } from '../context/serviceContext'; 
import { useNavigate } from 'react-router-dom';
import { UseBook } from '../context/bookingContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Book() {
    const { createBooking } = UseBook();
    const [formData, setFormData] = useState({ //start form data
        name: "",
        tel: "",
        eventType: "",
        eventCategories: "",
        eventDate: ""
    });
    const navigate = useNavigate();
    const { fetchServices, fetchServiceById, services, serviceInfo } = useContext<ServiceContextType>(ServiceContext); //get the data serviceContext.tsx page 

    useEffect(() => {
        fetchServices();// Page Load then enter the Event Services
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createBooking(formData.name, formData.tel, formData.eventType, formData.eventCategories, formData.eventDate);
        toast.success("Booking Successfully!", {
            position: "top-right",
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
        setFormData({ name: "", tel: "", eventType: "", eventCategories: "", eventDate: "" }); // Reset form
        navigate("/");
    };

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleServiceSelection = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        fetchServiceById(parseInt(value)); // Fetch event categories based on event type
    };

    return (
        <>
            <div className="booked">
                <div className="booking-box">
                    <h3>Booking</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        /> <br /> <br />
                        <input
                            type="text"
                            name="tel"
                            placeholder="Telephone Number"
                            value={formData.tel}
                            onChange={handleChange}
                            required
                        /> <br /> <br />

                        <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleServiceSelection}
                            required
                        >
                            <option value="" disabled>Select Event Type</option>
                            {services.map((service: { id: number, name: string }) => (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </select> <br /> <br />

                        <select
                            name="eventCategories"
                            value={formData.eventCategories}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Event Category</option>
                            {serviceInfo?.categories?.map((category: { id: number, name: string }) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select> <br /> <br />

                        <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                        /> <br /> <br />

                        <button type="submit">Book Now!</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Book;
