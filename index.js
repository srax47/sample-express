const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World! update test!');
});

app.listen(process.env.APP_PORT || 3000);
