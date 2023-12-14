import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';

import connectDB from './mongodb/connect.js';
import registrationRouter from "./routes/registration.routes.js";
import userRouter from "./routes/user.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
//app.use(express.urlencoded({limit: '50mb'}));

app.get('/', ( req, res ) => {
    res.send({ message: 'Heyy!!' });
});

app.use('/register', registrationRouter);
app.use('/user', userRouter);


const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started'));
    } catch (error) {
        console.log(error);
    }
};

startServer();
