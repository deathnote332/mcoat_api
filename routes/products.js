const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {Users} = require('../model/user');

router.get('/',auth,async (req,res)=>{
    products = await Products.findAll({attributes: ['id', 'brand','description']})
    res.json(products);
})

router.get('/:id', async(req,res)=>{
    products = await Users.findByPk(req.params.id);
    res.json(products);
})

module.exports = router;