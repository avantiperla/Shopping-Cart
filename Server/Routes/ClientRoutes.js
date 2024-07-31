const express = require('express')
const router = express.Router();


const {GetAllProducts} = require('../Controllers/GetAllProducts')

router.get('/getAllProducts',GetAllProducts);

module.exports =  router;