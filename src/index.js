require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requiresAuth = require('./middlewares/requiresAuth');


const app = express();
app.use(bodyParser.json());
app.use(authRoutes);


//2.2.12 & later
const mongoUri2212 = "mongodb://admin:passwordpassword@cluster0-shard-00-00-lm8gr.mongodb.net:27017,cluster0-shard-00-01-lm8gr.mongodb.net:27017,cluster0-shard-00-02-lm8gr.mongodb.net:27017/cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
// const mongoUri2212 = "mongodb://admin:passwordpassword@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true


//3.0 or later 
const mongoUri3 = "mongodb+srv://admin:passwordpassword@cluster0-lm8gr.mongodb.net/trackrecords?retryWrites=true&w=majority";

//3.6 or later
const mongoUri36 = "mongodb+srv://admin:passwordpassword@cluster0-lm8gr.mongodb.net/trackrecords?retryWrites=true&w=majority";
mongoose.connect(mongoUri2212, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDb');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongoDb', err);
});

app.get("/", (req, res) => {
    res.send('Hi there!!!');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})