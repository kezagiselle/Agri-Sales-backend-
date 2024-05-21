import dotenv from 'dotenv';
dotenv.config();
import express, { Router } from 'express';
import connectDB from './db/connectDB.js';
import router from './routes/index.js';
import Configurations from './configurations/index.js';
<<<<<<< HEAD
import swaggerUI from "swagger-ui-express";
import { documentation } from './docs/swaggerDocumentation.js';
=======
import ErrorHandler from './middleware/ErrorHandler.js';
>>>>>>> 5f64dadd8421a0cd785b7910a864a7e54db0f794



// app.use(bodyParser)
const app = express();
app.use(express.json()); 


app.use('/api/agri-sales', router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(documentation));


const start = async () => {
    try {
     connectDB(); 
        app.listen(Configurations.PORT, () => console.log(`Server is running on port ${Configurations.PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

start();
