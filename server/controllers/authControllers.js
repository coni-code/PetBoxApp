const User = require("../models/User")
const jwt = require('jsonwebtoken')

const maxAge = 24*60*60;

const createToken = (id) => {
    return jwt.sign(
        { id }, 
        'test secret', 
        {expiresIn: maxAge}
    );
}

module.exports.signup = async (req,res,next) =>{
    const {login, email, password} = req.body;
    try{
        const user = await User.create({login, email, password});
        const token = createToken(user._id);
        console.log(user);
        res.cookie('jwt', token,{httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({user: user._id});
    }
    catch(err){
        console.warn(err);
        res.status(500).send('Error: user not created!');
    }
};

module.exports.login = async (req,res,next) =>{
    const {login, password} = req.body;
    try{
        const user = await User.login(login, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({name: user.login});
    }
    catch(err){
        console.warn(err);
        res.status(404).send('Error: user not found!');
    }

};

module.exports.logout = (req,res,next) =>{
    res.cookie('jwt', '', {maxAge: 1});
    res.status(200).send('success');
};
