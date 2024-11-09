const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    categoryId : {
        type : String,
        required : true,
    },

    categoryName : {
        type : String,
        required : true,
    },

    image : {
        type : String,
        required : true
    },

    SubCategoryName : {
        type : String,
        required : true
    }
});

const SubCategory = mongoose.model("SubCategory",subCategorySchema);
module.exports = SubCategory;