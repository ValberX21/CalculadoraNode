const express = require("express");
const bodyParser = require("body-parser");
const app =  express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/soma", function(req,res){
    var n1c = req.body.numOne;
    var n2c = req.body.numTwo;

    var n1 = parseInt(n1c);
    var n2 = parseInt(n2c);

    result = (n1 + n2);

    res.send("Resultado da soma é "+ result)
})


app.post("/sub", function(req,res){
    var n1c = req.body.numOne;
    var n2c = req.body.numTwo;

    var n1 = parseInt(n1c);
    var n2 = parseInt(n2c);

    result = (n1 - n2);

    res.send("Resultado da subtração é "+ result)
    
});

app.post("/multipl", function(req,res){
    var n1c = req.body.numOne;
    var n2c = req.body.numTwo;

    var n1 = parseInt(n1c);
    var n2 = parseInt(n2c);

    result = (n1 * n2);

    res.send("Resultado da multiplição é "+ result)
});

app.post("/div", function(req,res){
    var n1c = req.body.numOne;
    var n2c = req.body.numTwo;

    var n1 = parseInt(n1c);
    var n2 = parseInt(n2c);

    result = (n1 / n2);

    res.send("Resultado da divisão é "+ result)
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});