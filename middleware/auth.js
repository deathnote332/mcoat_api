const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    if (!req.headers.authorization) return res.status(401).send(`Access denied. No Token provided`);
    const token = req.headers.authorization.split(" ")[1]
    if(!token) return res.status(401).send(`Access denied. No Token provided`);
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