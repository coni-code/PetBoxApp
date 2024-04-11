require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb://db:27017/db')
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.get('/set-cookies', (req,res) =>{
    res.cookie('newUser', false, {httpOnly: true});
    res.send("hi!");
});

app.get('/read-cookies', (req,res) =>{
    const cookies = req.cookies;
    res.send(cookies.newUser);
});

app.listen(5001, () => {
    console.log("Server started on port 5000");
});
