import dotenv from 'dotenv'
dotenv.config()
import mysql from "mysql2/promise";

export const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password:  process.env.PASSWORD,
  database:process.env.DATABASE,
    port: process.env.PORTDATABASE,
connectionLimit: 5
  });

connection.getConnection()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error:", err));

