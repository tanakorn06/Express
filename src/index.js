require('dotenv').config({ path: './config.env'});
const express = require('express');

const bodyParser =require('body-parser');
const cors = require('cors');

const res = require('express/lib/response');
const port = process.env.PORT || 4005;
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const employeeRoute = require('./routes/employeeRoute');
const productRoute = require('./routes/productRoute');
app.use("/product", productRoute);
app.use("/employee", employeeRoute);
//router
// app.get("/",(req, res)=>{
//     res.send("Hello from index");
//     console.log("Hello from index");
// });

// app.get("/about", (req, res)=>{
//     res.send("about");
// });
// //ทำเพิ่ม 3 อัน
// app.get("/product/:id", (req, res)=>{
//     //parems = parameters
//     res.send("product" + req.params.id);
// });

// app.get("/square/:num", (req, res)=>{
//     //parems = parameters
//     // res.send(`Square of ${req.params.num} = ${req.parems.num *req.params.num}`);
//     let sq = req.params.num*req.params.num;
//     res.send(`Square of ${req.params.num} = ${sq}`);
// });

// app.get("/sum/:num1/:num2", (req, res)=>{
//     let sum = (req.params.num1*1) + (req.params.num2*1);
//     res.send(`Square : ${sum}`);
// });


app.post("/register", (req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.tel);
    res.send("Hello from register" + req.body.name + "," + req.body.email);
});


app.listen(port,()=>{
    console.log("App is running on " + port);
});

