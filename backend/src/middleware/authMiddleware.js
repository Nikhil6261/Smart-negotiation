import { HTTP_STATUS } from "../constant/httptatus.js";
import JWT from "jsonwebtoken";

export const protect = async (req, res, next) => {
  
  try {
    
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res
    .status(HTTP_STATUS.UNAUTHORIZED)
    .json({ success: false, message: "UNAUTHORIZED " });
    
    let decoded = JWT.verify(token, process.env.SECRET);
    

    req.user = decoded
    next();

  } catch (error) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};
