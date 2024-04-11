const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, 'Login is required'],
    },
    email: {
        type: String, 
        unique: [true, 'Email is already in use'], 
        required: [true, 'Email is required'],
        lowercase: true,
        validate: [isEmail, 'Email is invalid'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password length is 8'],
    },
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
const User = mongoose.model('User', userSchema);

module.exports = User;
