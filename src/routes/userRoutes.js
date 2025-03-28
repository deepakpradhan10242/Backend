import express from 'express';
import userAuth from '../middleware/userAuth.js';
import {getUserData} from '../controllers/getUserData.js';



const userRouter = express.Router();

//for getting user data
userRouter.get('/data', userAuth, getUserData);


export default userRouter;