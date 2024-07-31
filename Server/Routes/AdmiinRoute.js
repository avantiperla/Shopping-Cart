const express = require('express')
const router = express.Router();

const {AddProduct} = require('../Controllers/AddProduct')

router.post('/addProduct',AddProduct);

module.exports =  router;