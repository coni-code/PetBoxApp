const User = require("../models/User")
module.exports.signup = async (req,res,next) =>{
    const {login, email, password} = req.body;
    try{
        const user = await User.create({login, email, password});
        console.log(user);
        res.status(201).json(user);
    }
    catch(err){
        console.warn(err);
        res.status(500).send('Error: user not created!');
    }
};
module.exports.login = (req,res,next) =>{
    const {login, password} = req.body;

};
module.exports.logout = (req,res,next) =>{
    
};
