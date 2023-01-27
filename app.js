const express = require("express");
const path = require("path");

// Make App
const app = express();
const port = 3000;

// App setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routing
app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start app
app.listen(port, function() {
    console.log(`The app is running on port ${port}`);
});