const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String, default: "backend/data/fallbackpng.png" },
}, {
    timestamps: true,
})

const User = mongoose.model("User", userModel)
module.exports = User
