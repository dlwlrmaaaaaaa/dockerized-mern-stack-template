
const User = require('../models/User');
const bcrypt = require('bcrypt');



exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ "Message": "Request Success", "data": users });
    } catch (error) {
        res.status(500).json({ "Message": "Request Failed", "error": error.message });
    }
}

exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        
        // Generate salt
        const salt = await bcrypt.genSalt(10);
        
        // Hash the password
        const hash = await bcrypt.hash(password, salt);
        
        // Create a new user with the hashed password
        const user = new User({ username, email, password: hash });
        
        // Save the user
        const success = await user.save();
        
        // If user is saved successfully, send a 201 response
        if (success) {
            return res.status(201).json({ "Message": "Request Success", "data": user });
        }
        
        // If something goes wrong, send a 401 response
        return res.status(401).json({ "Message": "Invalid Credentials!!!!!" });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ "Message": error.message });
}
}

exports.updateUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const {username, email, password} = req.body;
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt); 
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ "Message": "User not found" });
        }
        if(username){
            user.username = username;
        }
        if(email){
            user.email = email
        }
        if(password){
            user.password = hash;
        }
        const updatedUser = await user.save();
        return res.status(201).json({"message": "updated successfully", "data": updatedUser});
    }catch(error){
        return res.status(500).send({"message": error.message, "possible caused": "parameter is wrong, mali yung id"})
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if(user){
            return res.status(201).json({"message":"user deleted!", "data":user});
        }
        return res.status(401).send("User not found");
    }catch(err){
        return res.status(500).send({"message": err.message})
    }
}