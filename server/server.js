const express = require('express');

// creating the app call to use express to get the server running
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const router = require('./routes/todolist.router.js')

// setting the body parser to url encoded and static
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// my routes
app.use('/tasks', router);

// listening fro requests on a port
app.listen(port, () => {
    console.log('litening to the port', port);
});