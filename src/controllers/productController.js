exports.getProducts = async (req, res)=>{
    res.send(" all products ");
};

exports.getProductById = async (req, res)=>{
    res.send("product from id = " + req.params.id);
};

exports.getProductByName = async (req, res)=>{
    res.send("product from name = " + req.params.name);

};

exports.getProductByPrice = async (req, res)=>{
    res.send("product from price = " + req.params.price);

};

exports.addProduct = async (req,res)=>{
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.name);
    res.send(" id: " + req.body.id + "," + " name: " + req.body.name);
};

