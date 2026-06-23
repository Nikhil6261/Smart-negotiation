import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { HTTP_STATUS } from "../constant/httptatus.js";
import {connection} from '../config/db.js'

export const login = async (req, res) => {};

// export const register = async (req, res) => {
//   const { ...user } = req.body;

//   try {
//     if (!user.name || !user.email || !user.password)
//       return res.status(HTTP_STATUS.BAD_REQUEST).json({
//         success: false,
//         message: "data is not present",
//       });

//     const hashpassword = await bcrypt.hash(user.password, 10);

//     user.password = hashpassword;

    
//     const query = ` INSERT INTO users (name, email, password) VALUES (?, ?, ?) `;
    

//     const [result] = await connection.execute(query, [user.name ,user.email , hashpassword ]);
//     console.log("hee");
    

//     res.status(HTTP_STATUS.CREATED).json({
//       success: true,
//       message: "data create successfully",
//     });

//   } catch (error) {
//     return res.status(HTTP_STATUS.BAD_REQUEST).json({
//       success: false,
//       message: error.message,
//     })
// }

// };



export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    
    const query = "INSERT INTO user(name, email, password) VALUES (?, ?, ?)";
    
    const [result] = await connection.execute(query, [ name, email, hashPassword ]);
    
    console.log( name, email, hashPassword );


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
      message: error.message,
    });
  }
};