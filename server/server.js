require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');
const {requireAuth} = require('./middlewere/authMiddlewere');
mongoose.connect('mongodb://localhost:27017/db')
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors({
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/animals',requireAuth ,animalRoutes);

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
