import dotenv from 'dotenv';
dotenv.config()
import express, { Router } from 'express';
const app = express();
import connectDB from './db/connectDB.js';
import router from './routes/index.js'
import Configurations from './configurations/index.js';
import ErrorHandler from './middleware/ErrorHandler.js';

app.use(express.json());
app.use('/api/agri-sales', router)
// app.use(userRouter);




const start = async () => {
    
    app.listen(Configurations.PORT, () => console.log(`Server is running on port ${Configurations.PORT}`))
        connectDB()
}
start();