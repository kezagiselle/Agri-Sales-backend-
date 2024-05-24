import dotenv from 'dotenv';
dotenv.config();
import express, { Router } from 'express';
import bodyParser from 'body-parser'; // Consider removing if using express.json() exclusively
const app = express();
import connectDB from './db/connectDB.js';
import router from './routes/index.js';
import Configurations from './configurations/index.js';
import ErrorHandler from './middleware/ErrorHandler.js';
import cookieParser from 'cookie-parser';
// import swaggerUi from 'swagger-ui-express';
// import swagger from './docs/swagger.json' assert {type:"json"}


app.use(express.json()); 
app.use(cookieParser());


app.use('/api/agri-sales', router);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));


const start = async () => {
    try {
        await connectDB(); 
        app.listen(Configurations.PORT, () => console.log(`Server is running on port ${Configurations.PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

start();
