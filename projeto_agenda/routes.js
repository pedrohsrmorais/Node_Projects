const express = require('express');
const route = express.Router();


//process imports
const processos_main = require('./processos/processos_main');
const processos_criar_conta = require('./processos/processos_criar_conta');
const processos_login = require('./processos/processos_login');
const processos_homepage = require('./processos/processos_homepage');


//rotas main
route.get('/',processos_main.get)

//rotas login
route.get('/login',processos_login.get)
route.post('/login', processos_login.post)

//rotas c_account
route.get('/criar_conta',processos_criar_conta.get)
route.post('/criar_conta', processos_criar_conta.post)

//rotas homepage
route.get('/page_homepage',processos_homepage.get)


//export
module.exports = route;