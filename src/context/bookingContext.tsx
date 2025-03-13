import React, { createContext, useState, ReactNode, useContext } from "react";
import axios from "axios";
import { BE_URL } from "../utils/Constant";

interface Booking {
    id: number;
    username: string;
    telephone_number: string;
    service_id:string;
    category_id: string;
    event_date: string;
}

interface BookingContextType {
    bookings: Booking[];
    fetchBookings: () => Promise<void>;
    createBooking: (username: string, telephone_number: string,   service_id:string, category_id: string, event_date: string) => Promise<void>;
    deleteBooking: (id: number) => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    const fetchBookings = async () => {
        try {
            const response = await axios.get(`${BE_URL}/bookings`);
            setBookings(response.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const createBooking = async (username: string,telephone_number:string, service_id: string, category_id: string, event_date: string) => {
        console.log("Comes here....")
        try {
            const response = await axios.post(`${BE_URL}/bookings/create`, {
                username,
                telephone_number,
                service_id,
                category_id,
                event_date,
            }, { withCredentials: true });

            setBookings((prev) => [...prev, response.data.booking]);
        } catch (error) {
            console.error("Error creating booking:", error);
        }
    };
    
    const deleteBooking = async (id: number) => {
        try {
            await axios.delete(`${BE_URL}/bookings/${id}`);
            setBookings((prev) => prev.filter((booking) => booking.id !== id));
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    };

    return (
        <BookingContext.Provider value={{ bookings, fetchBookings, createBooking, deleteBooking }}>
            {children}
        </BookingContext.Provider>
    );

};

export const UseBook =():BookingContextType => {
    const bookContext = useContext(BookingContext);

    if(!bookContext){
        throw new Error('useBook must be used within an bookprovider')
    }
    return bookContext
}

export default BookingContext;

