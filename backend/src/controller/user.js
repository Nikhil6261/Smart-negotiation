import dotenv from 'dotenv'
dotenv.config()

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const login = async (req,res)=>{


    const {...user} = req.body

    const hashpassword = await bcrypt.hash(user.password, 10)

    user.password = hashpassword
    
    console.log(user);
    
    try {
    
        const query = ` INSERT INTO users (name, email, password) VALUES (?, ?, ?) `;

        const [result] = await connection.execute( query    , [user] );

        res.status(201).json("data create successfully")

    }catch (error) {

        
    }
    
}

export const register = async (req,res)=>{

    
}