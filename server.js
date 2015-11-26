var express = require('express'),
	app = express(),
	fs = require("fs");
	
app.use(express.static(__dirname));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000);
console.info('Node server is running on port : 3000');