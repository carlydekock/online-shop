const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controller/productControllers');

//GET: /api/products -> get all products from db
router.get('/', getAllProducts);
//GET: /api/products/:id-> get a product by id from the db
router.get('/:id', getProductById);

//callback for GET /api/products


//callback for GET /api/products/:id


module.exports = router;