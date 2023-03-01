exports.get = (req, res) => {
    email = req.session.email;
    res.render(email);
}