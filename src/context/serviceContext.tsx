import React, { createContext,  useState, ReactNode } from "react";
import axios from "axios";
import { BE_URL } from "../utils/Constant";


interface Service{
    id:number;
    name:string;
    categories: Category[];   
}


interface Category{ 
    id:number;
    name:string;
    description:string;  
}

export interface ServiceContextType {
  services: Service[];
  serviceInfo: Service;
  fetchServiceById: (serviceId: number) => Promise<Service | null>;
  fetchServices: () => Promise<void>;
  createService: (name: string, description: string, categories: string[]) => Promise<void>;
  deleteService: (id: number) => Promise<void>;
}

const defaultService: Service = {
  id: 0,
  name: "",
  categories: [],
};

export const ServiceContext = createContext<ServiceContextType>({
  services: [],
  serviceInfo: defaultService,
  fetchServiceById: async () => {
    throw new Error("fetchServiceById not implemented.");
  },
  fetchServices: async () => {
    throw new Error("fetchServices not implemented.");
  },
  createService: async () => {
    throw new Error("createService not implemented.");
  },
  deleteService: async () => {
    throw new Error("deleteService not implemented.");
  },
});

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [serviceInfo, setService] = useState<Service>();

  
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BE_URL}/services`, { withCredentials: true });
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  
  const createService = async (name: string, description: string, categories: string[]) => {
    try {
      const response = await axios.post(`${BE_URL}/services`, {
        name,
        description,
        categories,
      });
      setServices((prev) => [...prev, response.data.service]);                                    
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  
  const deleteService = async (id: number) => {
    try {
      await axios.delete(`${BE_URL}/services/${id}`);
      setServices((prev) => prev.filter((service) => service.id !== id)); 
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  //service with category
  const fetchServiceById = async (serviceId: number) => {
    try {
      const response = await axios.get(`${BE_URL}/services/service/${serviceId}`, { withCredentials: true });
      setService(response.data);
    } catch (error) {
      console.error(`Error fetching service with ID ${serviceId}:`, error);
      return null;
    }
  };

  return (
    <ServiceContext.Provider value={{ services, serviceInfo, fetchServices, createService, deleteService ,fetchServiceById }}>
      {children}
    </ServiceContext.Provider>
  );
};










    