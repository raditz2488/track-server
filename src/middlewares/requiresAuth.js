const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (req, res, next) => {
    // express lowercases header field name
    // authorization === 'Bearer fdfewfwwwww'
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in." })
    }


    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in." });
        }

        const { id } = payload;

        const user = await User.findById(id);
        req.user = user;
        next();
    });
}

