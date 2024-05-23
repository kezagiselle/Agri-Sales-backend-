import Payment from "../models/paymentModel";

export const createPayment = async (req, res, next) => {
    const { amount, currency, token } = req.body;

    try {
        // Process the payment with Stripe
        const charge = await stripe.charges.create({
            amount,
            currency,
            source: token,
            description: 'Payment for AGRI-SALES',
        });

        // Save the payment information to the database
        const payment = new Payment({
            amount,
            currency,
            status: 'success',
            createdAt: Date.now(),
            
        });

        await payment.save();

        res.json(payment);
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Payment failed' });
    }
};

