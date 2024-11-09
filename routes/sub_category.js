const express = require('express');
const SubCategory = require("../models/sub_category");
const SubCategoryRouter = express.Router();

SubCategoryRouter.post("/api/subcategory",async (req,res) => {
    try{
        const {categoryId , categoryName , image , SubCategoryName} = req.body;
        const subCategory = new SubCategory({categoryId,categoryName,image,SubCategoryName});
        await subCategory.save();
        return res.status(201).send(subCategory);
    } catch (e) {
        res.status(400).json({error : e.message})
    }
})

SubCategoryRouter.get("/api/category/:categoryName/subCategories",async (req,res) => {
    try{
        const {categoryName} = req.params;
        const subCategories = await SubCategory.find({categoryName : categoryName});
        if(!subCategories || subCategories.length == 0){
            return res.status(404).json({msg : "subcaetgories not found"})
        } else {
            return res.status(200).send(subCategories);
        }
    } catch(e) {
        res.status(400).json({error : e.message})
    }
})

module.exports = SubCategoryRouter;