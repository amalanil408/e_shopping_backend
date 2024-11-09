const express = require('express');
const mongoose = require('mongoose');
const PORT = 3001 || process.env.PORT
const app = express();
const DB = "mongodb+srv://amalanil8138:amalanil9061@cluster0.cm7g8.mongodb.net/"
const authRouter = require("./routes/auth");
const bannerRouter = require('./routes/banner');
const categoryRourter = require('./routes/category');
const SubCategoryRouter = require("./routes/sub_category")
const productRouter = require("./routes/products");


app.use(express.json());
app.use(authRouter);
app.use(bannerRouter);
app.use(categoryRourter);
app.use(SubCategoryRouter);
app.use(productRouter);


mongoose.connect(DB).then(() => {
    console.log('mongodb connected');
})


app.listen(PORT , "0.0.0.0" , () => {
    console.log(`server is runing in ${PORT}`);
});
