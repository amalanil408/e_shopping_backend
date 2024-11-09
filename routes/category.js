const express = require('express');
const Category = require('../models/category');
const categoryRourter = express.Router();

categoryRourter.post("/api/category", async (req,res) => {
    try{
        const {name , image , banner} = req.body;
        const category = new Category({name,image,banner})
        await category.save();
        return res.status(201).send(category);
    } catch (e) {
        res.status(400).json({error : e.message})
    }
});


categoryRourter.get("/api/category",async (req,res) => {
    try{
       const category =  await Category.find()
       return res.status(200).send(category)
    } catch(e) {
        res.status(400).json({error : e.message})
    }
})

module.exports = categoryRourter;