const conn = require('../database/database');

exports.get = (req, res) => {
    res.render('page_main');
}

exports.post = (req, res) => {

    const nome = req.body.nome;
    conn.query(`INSERT INTO users_teste (nome) VALUES ('${nome}')`)
    res.send('cadastro realizado')

}
