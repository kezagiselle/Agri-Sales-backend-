import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();
import connectDB from './db/connectDB.js';

app.use(express.json());

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI || 'mongodb+srv://agriSales:Agri1234@@cluster0.faa8neu.mongodb.net/');
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
       console.log(error)
    }
}
start();