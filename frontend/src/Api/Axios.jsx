import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://smart-negotiation.onrender.com" ,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});



//interceptors which add a token in every request. SO we dontt need to add token in every request 
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) config.headers.Authorization = ` bearber ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
