import { HTTP_STATUS } from "../constant/httptatus";
import JWT from 'jsonwebtoken'


const protect = async (req, res, next) => {
  let token;
  let header = req.headers.authorization;

  try {
    if (header && header.startWith("bearer")) {
      token = header.split("")[1];
    }

    if (!token)
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ success: false, message: "UNAUTHORIZED " });
 
 let decoded =  JWT.verify(token ,process.env.SECRET)
 
 

    } catch (error) {
    res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ success: false, message: error.message });
  }
};
