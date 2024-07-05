const { verify } = require('jsonwebtoken');

const authenticate = (req, res ,next) => {
    if(!req.headers["authorization"]){
        return res.status(401).send("Access denied: No Token Provided");
    }

    if(req.headers["authorization"]){
        var accessToken = req.headers["authorization"].split(" ")[1];

        verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                return res.status(401).send("Access Denied: " + err.message)
            }
            next();
        })
    }

}

module.exports = authenticate;