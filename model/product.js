const sequelize = require('../startup/connection');
const Sequelize = require('sequelize');
const Products = sequelize.define('tblproducts',{
    
}, {timestamps: false});

module.exports = Products;