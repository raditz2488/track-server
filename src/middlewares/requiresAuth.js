const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.Schema('User');

module.exports = (req, res, next) => {
    // express lowercases header field names
    // authorization === 'Bearer fdfewfwwwww'
    const { authorization } = req.headers;

    const token = authorization.replace('Bearer ', '');

    const { id } = jwt.verify(token, 'MY_SECRET_KEY');

    await User.
}

