var express = require('express');
var path = require('path');
var app = express();
var DB;
var port = 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(__dirname +'/site'));
//-----------------------------------------
//Egy POST rest hívás kezelése, ha a továbbított paraméter neve: data
//A function(req,res) egy callback, amelyet a beérkezett hívás után mi kódolunk, hogy mihez kezdjünk a bejött adatokkal
//A "req" paraméter a hívás paramétereit tartalmatta, a "res" az ExpressJS hívásra adott válassszal kapcsolatos függvényeit
//Ha minden renben van, 200-as kód megy vissza, ha nem akkor a hibának megfelelő (pl.: nem létező oldal esetén 404)
app.post('/db', function(req, res){
    this.DB = req.body.dbDB;
    console.log(this.DB); 
    res.send('200').end(); 
});
app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, './site', 'welcomePage.html'));
});
app.get('/start', function(req, res){
    //res.send(this.DB);
    this.DB = req.body.dbDB;
        console.log(this.DB); 

});


app.listen(port);
