dotenv.config()
import {app} from './src/app.js'
import dotenv from 'dotenv'

const PORT = process.env.PORT || 4000 



app.listen(PORT ,()=>{

    console.log(` server is live is : ${PORT}`)
})