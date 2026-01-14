require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Database Connection
mongoose.connect("mongodb+srv://vinay:vinay123@cluster0.ypfoelr.mongodb.net/vinayKiranaStore?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("✅ Online Database Connected"))
    .catch(err => console.log("❌ DB Error:", err));

// 2. Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String
});

const Product = mongoose.model('Product', productSchema);

// 3. API Routes

// (A) Save Product
app.post('/api/products', async(req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Fail" });
    }
});

// (B) Get All Products
app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Fail" });
    }
});

// (C) DELETE Product (यह नया है) 🗑️
app.delete('/api/products/:id', async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Delete Failed" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));