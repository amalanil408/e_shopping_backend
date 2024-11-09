const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        trim : true,
        required: true
    },

    productPrice : {
        type : Number,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    subCategory : {
        type : String,
        required : true,
    },

    images : [
        {
            type : String,
            required : true
        }
    ],

    popluar : {
        type : Boolean,
        default : true
    },

    recommend : {
        type : Boolean,
        default : false,
    }
});

const Products = mongoose.model("products",productSchema);
module.exports = Products