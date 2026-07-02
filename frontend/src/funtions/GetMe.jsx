import AxiosInstance from "../Api/Axios";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { setUser } from "../Redux/Features/ProfileSlice";

function GetMe() {
  
  const dispatch = useDispatch()
  const handleReload = async () => {
    try {
      const result = await AxiosInstance.get("/api/getme");

 const token =  localStorage.getItem("token")

      // console.log(token);
      
      dispatch(setUser({
        user: result.data.data,
        token: token,
        isAuthanicate: true, 
      }))
      

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleReload();
  }, []);

  return null;
}

export default GetMe;
