const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token = req.cookies.token;
    
    if(!token) return res.status(401).send(`Access denied. No Token provided ${token}`);
    console.log(process.env.SECRET_TOKEN)
    try{
        const decoded = jwt.verify(token,process.env.SECRET_TOKEN);
        req.user = decoded;
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token');
    }
};