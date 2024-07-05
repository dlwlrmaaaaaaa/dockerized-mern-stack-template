const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("users", UserSchema)
module.exports = User;