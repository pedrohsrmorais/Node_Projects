const conn = require('../database/database');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {
    res.render('page_login');
}

exports.post = (req, res) => {
    const { email, senha } = req.body;
  };
  