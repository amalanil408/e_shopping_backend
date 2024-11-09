const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,

    },

    email: {
        type:String,
        required:true,
        trim:true,
        validate : {
            validator:(value) => {
                const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return result.test(value);
            },
            messgae : "Please enter a valid email address",
        }
    },

    state: {
        type:String,
        default: "",
    },


    city: {
        type:String,
        default: "",
    },
 

    locality: {
        type:String,
        default : "",
    },



    password: {
        type:String,
        required:true,
        trim:true,
        validate : {
            validator : (value) => {
                return value.length >= 8;
            },
            messgae : "Password must be at least 8 characters long",
        }
    }
});

const User = mongoose.model("users",userSchema);

module.exports = User;