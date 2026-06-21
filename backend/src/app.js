import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieparser from 'cookie-parser'
import {userRouter} from './routes/userRouter.js' 
// import {connection} from './config/db.js'
export const app = express()


app.use(helmet()) //security
app.use(urlencoded({extended:true}))
app.use(express.json())
// app.use(cors({origin:process.env.CLIENT_ORIGIN , credentials:true} ))
app.use(cookieparser())




app.use('/api', userRouter) //security

// app.get('/',(req,res) => res.json(' server is working perperly' ))

app.get('/',(req,res) => res.send(' server is working perperly' ))

