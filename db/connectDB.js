import mongoose from "mongoose";
import Configurations from "../configurations/index.js";



export default function connectDB() {
    mongoose.connect(Configurations.MONGODB_CONNECTION_STRING)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
}
 