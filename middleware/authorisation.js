import userModel from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken"


const checkUsers={
    //admin check
     admin:async (req, res, next) => {
    const token=req.cookies.token;
    console.log(token);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const email = payload.email;
    
    
        try {
            const user = await userModel.findOne({ email: email });
           
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            if (user.Role !== "farmer") {
                return res.status(403).json({ success: false, message: "Access denied you're not authorized as admin" });
            }else{
                next();
            }
            
      
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
},
//user check(other user in case)
user:async (req, res, next) => {
    const token=req.cookies.token;
    console.log(token);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const email = payload.email;
    
    
        try {
            const user = await userModel.findOne({ email: email });
           
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            if (user.Role !== "user") {
                return res.status(403).json({ success: false, message: "Access denied you're not authorized as admin" });
            }else{
                next();
            }
            
      
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
},
}
export default checkUsers;









