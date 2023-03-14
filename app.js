const express = require("express");
const path = require("path");

require('./js/exercises/loops');
require('./js/exercises/map');
const jsRouting = require('./js/handler.js');

// Make App
const app = express();
const port = 3000;

// App setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routing
app.use("/js", jsRouting);

app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});
// Start app
app.listen(port, function() {
    console.log(`The app is running on port ${port}`);
});