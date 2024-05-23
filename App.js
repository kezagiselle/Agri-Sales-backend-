import dotenv from 'dotenv';
dotenv.config();
import express, { Router } from 'express';
import connectDB from './db/connectDB.js';
import router from './routes/index.js';
import Configurations from './configurations/index.js';
import swaggerUI from "swagger-ui-express";
import swaggerDocumentation from './docs/swaggerDocumentation.js'
import ErrorHandler from './middleware/ErrorHandler.js';
import cookieParser from 'cookie-parser';




// app.use(bodyParser)
const app = express();
app.use(express.json());
app.use(cookieParser());


app.use('/api/agri-sales', router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));


const start = async () => {
    try {
     connectDB(); 
        app.listen(Configurations.PORT, () => console.log(`Server is running on port ${Configurations.PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

start();
