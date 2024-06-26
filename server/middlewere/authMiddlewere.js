const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, 'test secret',(err, decodedToken) => {
            if(err){
                console.log(err)
                res.status(403).send('Acces denied');
            }
            else{
                next();
            }
        });
    }
    else{
        console.log(req.cookies)
        res.status(403).send('Acces denied');
    }
    
}
const checkUser =  (req, res, next) => {
    const token = req.cookies.jwt;
    if (token){
        jwt.verify(token, 'test secret', async (err, decodedToken) =>{
            if(err){
                res.locals.user = null;
                next();
            }
            else{
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUser};
