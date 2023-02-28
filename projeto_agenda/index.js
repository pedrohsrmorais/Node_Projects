const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');



//borderparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ejs
app.set('view engine', 'ejs');
app.set('views', './pages');

//uso de rotas
app.use(routes);




//servidor
app.listen(3000, function () {
    console.log('Server listening on port 3000: http://localhost:3000');
});
