
const bodyParser = require('body-parser')
const products = require('../routes/products');
const auth = require('../routes/auth');

module.exports = function (app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use('/api/auth',auth);
    app.use('/product',products);
}