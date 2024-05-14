import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    otpExpires: {
        type: Date,
        required: false
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    toJSON: {
        transform: (doc, ret) =>{
            ret.id = ret._id;
            delete ret._id;
            delete ret._v;
            delete ret.password;
            return ret;
        }
    },
    timestamps: true,
});
const farmerModel = mongoose.model('farmer',farmerSchema);
export default farmerModel;