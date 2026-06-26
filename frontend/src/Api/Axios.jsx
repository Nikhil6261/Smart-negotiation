import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: "http://localhost:3000" ,
  baseURL: "https://smart-negotiation.onrender.com" ,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default AxiosInstance;