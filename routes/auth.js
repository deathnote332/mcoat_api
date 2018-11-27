const jwt = require('jsonwebtoken');
const _ = require('lodash')
const {getUser} = require('../model/user');
const Joi = require('joi');
const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');

router.post('/', async  (req,res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user = JSON.stringify(await getUser(req.body));
    if(_.isEmpty(user)) return res.status(400).send("Invalid eamil or password");

    let user_json = JSON.parse(user);
    const isValidPass = await bcrypt.compare(req.body.password,user_json.password);
    if(!isValidPass) return res.status(400).send("Invalid eamil or password");

    const token  = jwt.sign(_.omit(user_json,['password','remember_token']),process.env.SECRET_TOKEN);
    // return res.header('x-auth-token',token).send(_.omit(user_json,['password','remember_token']));
    return res.header('x-auth-token',token).send(token);
})

function validate(req){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req,schema);
}

module.exports = router;