const express = require('express');
const app = express();
const session = require('express-session');
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

//sessão
// Midware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));



// create a route that reads a session variable
app.get('/get', (req, res) => {
    const username = req.session.username;
    res.send(`session variable value: ${username}`);
});



//servidor
app.listen(3000, function () {
    console.log('Server listening on port 3000: http://localhost:3000');
});
