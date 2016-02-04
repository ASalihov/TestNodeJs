var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send("Fuck Off!");
})

var server = app.listen(3000, function(){
	/*var host = server.address().address
	var port = server.address().port*/
	
	console.log("Another fuck off"/*, host, port*/);
})

server.add