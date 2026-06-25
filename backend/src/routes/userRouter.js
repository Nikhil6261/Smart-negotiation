import express from 'express'
import {login, register} from '../controller/user.js'
import {authlimit} from '../middleware/rateLimiter.js'

export const userRouter = express.Router()

userRouter.post('/register', authlimit,register);
userRouter.post('/login', authlimit, login)


