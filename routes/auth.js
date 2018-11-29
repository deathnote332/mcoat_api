const jwt = require('jsonwebtoken');
const _ = require('lodash')
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const express = require('express');
const router = express.Router();

const User = require('../model/user');

router.post('/', async  (req,res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.scope('is_deleted').findOne({where:{email: req.body.email}});
    if(_.isEmpty(user)) return res.status(400).send("Invalid email or password");

    let password = user.password;

    const isValidPass = await bcrypt.compare(req.body.password,password);
    if(!isValidPass) return res.status(400).send("Invalid eamil or password");
  
    user = _.pick(user,['first_name','last_name','email','status','user_type','warehouse','active']);
    return res.send(user);
    
    // const token  = jwt.sign(_.omit(user_json,['password','remember_token']),process.env.SECRET_TOKEN);
    return res.header('x-auth-token',token).send(_.omit(user_json,['password','remember_token']));
    // return res.header('x-auth-token',token).send(token);
})

function validate(req){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req,schema);
}

module.exports = router;