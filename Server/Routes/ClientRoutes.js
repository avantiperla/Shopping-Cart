const express = require('express')
const router = express.Router();


const {GetAllProducts} = require('../Controllers/GetAllProducts')
const {OrderProduct} = require('../Controllers/OrderProduct')
const {GetAllOrders} = require("../Controllers/GetAllOrders")

router.get('/getAllProducts',GetAllProducts);
router.post('/order',OrderProduct)

router.get('/getAllOrders',GetAllOrders);



module.exports =  router;