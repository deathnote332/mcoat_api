const express = require('express');
const router = express.Router();
const connection = require('../startup/connection');
const auth = require('../middleware/auth');

router.get('/',auth,(req,res)=>{
    console.log(res.user)
})



function getProducts(offset){
    return new Promise((resolve,reject) =>{
        connection.query('SELECT * from products limit 10 offset '+offset, function (err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        })
    })
}

module.exports = router;