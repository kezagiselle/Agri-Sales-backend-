import dotenv from "dotenv";
dotenv.config();

const Configurations = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING = 'mongodb+srv://uwasandrine99:sandrine99@cluster0.ktffyo9.mongodb.net/AGRI-SALES',
    PORT: process.env.PORT = 5000,
 


}

export default Configurations;