import express from 'express';
import registerUser from '../controllers/registerUser.js';
import {isAuthenticated, loginUser,  resetPassword,  sendResetotp} from '../controllers/loginUser.js';
import logoutUser from '../controllers/logoutUser.js';

import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register',registerUser);

authRouter.post('/login',loginUser);

authRouter.post('/logout',logoutUser);


// for account retrival
authRouter.post('/send-reset-otp',sendResetotp);
authRouter.post('/reset-password',resetPassword);





export default authRouter;
