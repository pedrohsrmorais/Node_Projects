const conn = require('../database/database');

exports.get = (req, res) => {
    res.render('page_criar_conta');
}

exports.post = (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    
    conn.query(`INSERT INTO users (nome,email,senha) VALUES ('${nome}','${email}','${senha}')`)
    res.send("Cadastro realizado")


}