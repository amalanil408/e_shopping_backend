const express = require('express');
const ProductModel = require("../models/product");
const productRouter = express.Router();

productRouter.post("/api/add-product", async (req,res) => {
    try{
        const {productName,productPrice,quantity,description,category,subCategory,images,popluar,recommend} = req.body;
        const product = new ProductModel({productName,productPrice,quantity,description,category,subCategory,images,popluar,recommend});
        await product.save();
        return res.status(201).send(product);
    } catch (e) {
        res.status(400).json({error : e.message})
    }
})

module.exports = productRouter;