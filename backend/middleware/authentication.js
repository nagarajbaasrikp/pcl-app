const jwt = require('jsonwebtoken');

//Token is usually sent in the request header
//no logout concept in jwt. just verify the token
module.exports = (req, res, next) => {
    const token = req.header('token');
    if (!token)
        return res.status(401).json({
            status: 0,
            msg: 'Token not found'
        });
    try {
        const decodedToken = jwt.verify(token, 'secretstring');
        console.log(decodedToken);
        next();
    }
    catch (err) {
        res.status(500).send({
            message: `Token not valid ${err.toString()}`,
        });
    }
}