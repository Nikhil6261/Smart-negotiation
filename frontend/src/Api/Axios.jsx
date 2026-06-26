import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api" ,
  baseURL: "https://smart-negotiation.onrender.com" ,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default AxiosInstance;