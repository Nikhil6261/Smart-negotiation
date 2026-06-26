import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieparser from 'cookie-parser'
import {userRouter} from './routes/userRouter.js' 
import {connection} from './config/db.js'
import dotenv from 'dotenv'
dotenv.config() 
export const app = express()



app.use(helmet()) //security
app.use(urlencoded({extended:true}))
app.use(express.json())
app.use(cors({

    origin:["https://smart-negotiation.vercel.app", "http://localhost:5173"],
    credentials:true 
} ))


app.use(cookieparser())


app.use('/api', userRouter) //security

// app.get('/',(req,res) => res.json(' server is working perperly' ))

app.get('/',(req,res) => res.send(' server is working perperly' ))

