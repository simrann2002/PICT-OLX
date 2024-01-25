const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/getAllProd',productController.getAllProd);
router.post('/addProduct',productController.addProduct);
router.get('/findbyname/:name',productController.findProductbyName)
router.get('/findbycat/:catname',productController.findProductbyCat)
router.get('/findprodbyid/:id',productController.findProductById)
router.get('/findprodbycatid/:id',productController.findProductsbyCatId)


module.exports = router;
