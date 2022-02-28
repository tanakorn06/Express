const express = require('express');
const app = express.Router();
const productContoller = require('../controllers/productController')

//ข้อ 1
app.get("/",productContoller.getProducts);
//ข้อ 2
app.get("/:id",productContoller.getProductById);
//ข้อ 3
app.get("/name/:name",productContoller.getProductByName);

//ข้อ 4
app.get("/price/:price",productContoller.getProductByPrice);
//ข้อ 5
app.post("/", productContoller.addProduct);


module.exports = app;