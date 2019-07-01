const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Products } = require('../model/product');

router.get('/',auth ,async (req,res)=>{
    products = await Products.findAll();
    res.json(products);
})

router.post('/', auth, async(req,res) => {
    console.log(req);
    product = await Products.findOne({
        where: {id: req.body.id}
    })
    res.json(product);
});

router.get('/brands/:page',auth ,async (req,res)=>{
    const limit = 10;
    let offset = 0;
    const page = req.params.page;
    const dataCount = Products.findAndCountAll({group: 'brand'});
    const pages = Math.ceil(dataCount / limit);
    offset = limit * (page - 1);

    brands = await Products.findAll({
        group: 'brand', 
        attributes: ['brand'],
        limit,
        offset
    });
    res.json(brands);
})

module.exports = router;