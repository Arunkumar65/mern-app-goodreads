import express from "express";
import { signupUser, userLogin } from "../controller/user";
import { protect } from "../middleware/verifyToken";

const userRouter = express.Router();

userRouter.post('/signup', signupUser);
userRouter.post('/login', userLogin);
userRouter.get('/data', protect);

export {
    userRouter
}