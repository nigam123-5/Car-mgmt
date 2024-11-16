const express = require('express');
const {
    addProduct,
    editProduct,
    deleteProduct,
    findProductById,
    findProduct,
} = require('../controllers/productController');

const router = express.Router();

// Routes for product operations
router.post('/add', addProduct); // Add a new product
router.put('/edit/:id', editProduct); // Edit a product by ID
router.delete('/delete/:id', deleteProduct); // Delete a product by ID
router.get('/find/:id', findProductById); // Find a product by ID
router.get('/find', findProduct); 

module.exports = router;
