//iks amodel banao jo bhi foelds chahiye usek accordingconst mongoose = require("mongoose");

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    required: true,
    validate: {
      validator: function (value) {
        return Object.keys(value).length <= 10; // Ensure the object has at most 10 keys
      },
      message: 'Images object can contain at most 10 URLs',
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the `updated_at` field on document update
productSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
