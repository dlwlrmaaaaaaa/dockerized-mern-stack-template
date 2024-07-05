const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { token_secret } = require('../config/config')

const generateToken = (user) => {
    return jwt.sign({email: user.email, password: user.password}, token_secret, { expiresIn: '1800s'})
}

exports.loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).send({"message": "Email not found"})
        }      
        const authPassword = await bcrypt.compare(password, user.password);

        if(authPassword){
            const token = generateToken(user);
            return res.status(200).json({"message": "Login Successfully", "data" : user, "token": token});
        }
            return res.status(401).send("Mali yung password mo boi!");
    } catch (error) {
        return res.status(500).send({"Message" : error.message})
    }
}

