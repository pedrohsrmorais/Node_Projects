const express = require('express');
const route = express.Router();


//process imports
const processos_home = require('./processos/processos_home')


//rotas main
route.get('/',processos_home.get)
route.post('/', processos_home.post)

//rotas teste
route.get('/test', (req,res)=>{
    res.send("olá test")
})


//export
module.exports = route;