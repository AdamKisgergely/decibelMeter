//------ Alap beállítások-----------------
//Az ExpressJS modult importáljuk egy változóba
var express = require('express');
//Fájl eléréshez szükséges modul
var path = require('path');
//A változó segítségével elindítjuk az ExpressJS modult
var app = express();
//Választunk egy port számot amin figyelni fog a szerver
var port = 8080;
//Importáljuk a body-parser modult
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //Az ExpressJS modulhoz hozzáadjuk a body-parser által biztosított JSON kezelést
app.use(bodyParser.urlencoded({extended:true})); //Az ExpressJS már az URL kódolásokat is jobban kezeli a body-parser segítségével
//Elérhetővé tesszük a site mappát külső hívásra
app.use(express.static(__dirname +'/site'));
//-----------------------------------------
//Egy POST rest hívás kezelése, ha a továbbított paraméter neve: data
//A function(req,res) egy callback, amelyet a beérkezett hívás után mi kódolunk, hogy mihez kezdjünk a bejött adatokkal
//A "req" paraméter a hívás paramétereit tartalmatta, a "res" az ExpressJS hívásra adott válassszal kapcsolatos függvényeit
//Ha minden renben van, 200-as kód megy vissza, ha nem akkor a hibának megfelelő (pl.: nem létező oldal esetén 404)
app.post('/post', function(req, res){
    console.log(req.body.data); //Kiírjuk a konzolba a küldött adatot
    res.send('200').end(); //Visszajelzünk a küldőnek, hogy megkaptuk az adatot
});
//Kezdőoldalnak állítjuk az index_tabs.html-t "/" hívásra
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './site', 'index_tabs.html'));
});
//Elindítjuk az ExpressJS modul által biztosított szervert a megadott porton
app.listen(port);
