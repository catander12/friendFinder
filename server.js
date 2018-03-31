var express = require("express");
var path = require("path");
const PORT = process.env.PORT || 5000;


//initialize express
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.use(express.static(__dirname + '/public'));









app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});






