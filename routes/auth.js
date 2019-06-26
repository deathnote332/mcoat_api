const _ = require('lodash')
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const express = require('express');
const router = express.Router();

const {User,generateToken} = require('../model/user');

router.post('/', async  (req,res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(422).json({
        isSuccessful: false,
        message: error.details[0].message
    });

    let user = await User.scope('is_deleted').findOne({where:{email: req.body.email}});
    if(_.isEmpty(user)) return res.status(200).json({isSuccessful: false, message: "Invalid email or password"});

    let password = user.password;
    

    const isValidPass = await bcrypt.compare(req.body.password,password);
    if(!isValidPass) return res.status(200).json({isSuccessful: false, message: "Invalid email or password"});
  
    user = _.pick(user,['first_name','last_name','email','status','user_type','warehouse','active']);
    res.cookie('token',generateToken(user), {
        maxAge: 86400 * 1000, // 24 hours
        httpOnly: false, // http only, prevents JavaScript cookie access
    });
    return res.status(200).json({isSuccessful: true, message: "Successfully authenticated"});
   
})

function validate(req){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req,schema);
}

module.exports = router;