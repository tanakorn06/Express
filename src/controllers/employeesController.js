exports.getemployee = async (req, res)=>{
    res.send(" get all employees ");
};
exports.getemployeeById = async (req, res)=>{
    res.send("get employees from id = " + req.params.id);
};

exports.getemployeeBysal = async (req, res)=>{
    const sal = req.params.sal
    const tax = sal*10/100
    res.send(`get employees from sal : ${tax}` );
};

exports.getemployeeByAge = async (req, res)=>{
    const age = req.params.age
    const retire = 60-age
    res.send(`get Number of years before retirement : ${retire}` );
};

exports.addemployee = async (req,res)=>{
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.salary);
    res.send(" add an employee: " + "id: " + req.body.id + "," + " name: " + req.body.name + "," + " age: " + req.body.age + "," + " salary: "+ req.body.salary);
};

