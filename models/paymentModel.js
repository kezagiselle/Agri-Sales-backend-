import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    currency:{
        type: string,
        required: true
    }

})

const Payment = new mongoose.Model('payment', paymentSchema)


export default Payment