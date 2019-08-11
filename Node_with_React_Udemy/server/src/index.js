const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const key = require('./config/key');

require('./services/passport');
try {
    mongoose.connect(key.MONGODB_URI)
    console.log(`connected DB successful`);
} catch (error) {
    
}


const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/',(req,res) => {
    res.send('HELLO DONGND');
});


app.use(
    cookieSession({
        maxAge: new Date().getTime() + 12,
        keys: [key.CookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session());


require('./routers/authRouter')(app);
require('./routers/billingRouter')(app);

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server start PORT: ${PORT}`);
})