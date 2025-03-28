import express from 'express';
import userAuth from '../middleware/userAuth.js';
import {getUserData,updateUserData} from '../controllers/getUserData.js';



const userRouter = express.Router();

//for getting user data
userRouter.get('/data', userAuth, getUserData);

userRouter.get('/update', userAuth, updateUserData);


export default userRouter;