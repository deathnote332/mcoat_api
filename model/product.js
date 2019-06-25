const sequelize = require('../startup/connection');
const Sequelize = require('sequelize');
const Products = sequelize.define('products',{
    brand:                  Sequelize.STRING,
    category:               Sequelize.STRING,
    code:                   Sequelize.STRING,
    description:            Sequelize.STRING,
}, {timestamps: false});

exports.Products = Products;