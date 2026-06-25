import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { HTTP_STATUS } from "../constant/httptatus.js";
import { connection } from "../config/db.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  try {
    if (!email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ success: false, message: " data is  empty" });
    }

    const [result] = await connection.execute(
      "SELECT * FROM user WHERE email = ? ",
      [email],
    );

    // if (result.length === 0) {
    //   return res
    //     .status(HTTP_STATUS.NOT_FOUND)
    //     .json({ success: true, message: "user not found" });
    // }

    const user = result[0]

    
     const isMatch = await bcrypt.compare(password , user.password )

     if(!isMatch){
    return  res.status(HTTP_STATUS.UNAUTHORIZED).json({success : false , message : " invalid creditional"})
     } 



    res.status(HTTP_STATUS.ok).json({
      success: true,
      message: "credeintal match",
      data: result,
    });
  } catch (error) {
    res
      .status(HTTP_STATUS.NOT_FOUND)
      .json({ success: false, message: error.message });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const [user_exits] = await connection.execute(
      "SELECT * FROM user WHERE email = ? ",
      [email],
    );

    if (user_exits.length > 0) {
      console.log(user_exits);
      
      return res
        .status(HTTP_STATUS.ALLREADY_EXISTES)
        .json({ success: false, message: "user all ready exits" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO user(name, email, password) VALUES (?, ?, ?)";

    const [result] = await connection.execute(query, [
      name,
      email,
      hashPassword,
    ]);

    console.log(name, email, hashPassword);

    return res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: "User created successfully",
      data: {
        id: result.insertId,
      },
    });
  } catch (error) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message: error,
    });
  }
};
