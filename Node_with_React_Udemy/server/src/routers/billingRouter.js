const keys = require('../config/key');
const stripe = require('stripe')(keys.STRIPE_SECKEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post('/api/stripe', requireLogin, async(req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency:'usd',
            source: req.body.id,
            description:"payment 5USD"
        });
        console.log('charge: ',req.user);
        req.user.credits +=5;
        const user = await req.user.save();
        res.send(user);
    });
}