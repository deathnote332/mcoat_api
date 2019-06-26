const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Products } = require('../model/product');

router.get('/',auth ,async (req,res)=>{
    products = await Products.findAll({attributes: ['id', 'brand','description']});
    res.json(products);
})


module.exports = router;