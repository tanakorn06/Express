const express = require('express');
const app = express.Router();
const employeesController = require('../controllers/employeesController')
//การบ้าน
//ข้อ 1
app.get("/",employeesController.getemployee);
//ข้อ 2
app.get("/:id",employeesController.getemployeeById);
//ข้อ 3
app.get("/tax/:sal",employeesController.getemployeeBysal);
//ข้อ 4
app.get("/retire/:age",employeesController.getemployeeByAge);

app.post("/", employeesController.addemployee);

module.exports = app;