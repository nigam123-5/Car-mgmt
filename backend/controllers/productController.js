const Product = require('../models/productModel');

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const { title, desc, price, images } = req.body;

        // Validate the required fields
        if (!title || !desc || !price || !images) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create and save the new product
        const newProduct = new Product({ title, desc, price, images });
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Edit a product by ID
exports.editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Run schema validations
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the product
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Find a product by ID
exports.findProductById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the product
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product found', product });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


exports.findProduct = async (req, res) => {
    try {

        // Find the product
        const product = await Product.find();

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product found', product });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
