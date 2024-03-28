import express from "express";
import { signupUser, userLogin } from "../controller/user";
const userRouter = express.Router();

userRouter.post('/signup', signupUser);
userRouter.post('/login', userLogin);

export {
    userRouter
}