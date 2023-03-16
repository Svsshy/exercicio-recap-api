let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    displayName: {type: String, maxLength: 64, required: true}, // max: 64 characters
    handler: {type: String, maxLength: 16, required: true}, // unique, max: 16 characters
    email: {type: String, required: true}, // unique
    password: {type: String, required: true}
})


const User = mongoose.model("User", userSchema)


module.exports = User