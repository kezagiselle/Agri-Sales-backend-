import dotenv from 'dotenv';
dotenv.config();
import express, { Router } from 'express';
import cors from "cors";
import connectDB from './db/connectDB.js';
import router from './routes/index.js';
import swaggerUI from "swagger-ui-express";
import swaggerDocumentation from './docs/swagger.js';
import cookieParser from 'cookie-parser';



const corsOptions = {
    allowedHeaders: ["Authorization","Content-Type"],
    methods: ["GET", "POST", "UPDATE", "DELETE" ],
    origin: ["http://localhost:5173", process.env.CLIENT_SIDE],
  }

const app = express();
app.use(express.json()); 
app.use(cors(corsOptions));
// app.use(bodyParser)
app.use(express.json());
app.use(cookieParser());

app.use('/api/agri-sales', router);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));


const start = async () => {
    try {
     connectDB(); 
        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

start();
