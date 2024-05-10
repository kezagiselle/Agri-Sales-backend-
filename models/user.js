import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullNames:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Role:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
});

const userModel = mongoose.model('user', userSchema);
export default userModel;