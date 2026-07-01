import express from 'express'
import {getme, login, register} from '../controller/user.js'
import {authlimit} from '../middleware/rateLimiter.js'
import {protect} from '../middleware/authMiddleware.js'

export const userRouter = express.Router()

userRouter.post('/register', authlimit,register);
userRouter.post('/login', authlimit, login)
userRouter.get('/getme', authlimit , protect ,getme)


