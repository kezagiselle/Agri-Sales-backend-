import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullNames: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
<<<<<<< HEAD
    }
}, {
    timestamps: true 
=======
    },
>>>>>>> 5f64dadd8421a0cd785b7910a864a7e54db0f794
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
