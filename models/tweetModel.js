let mongoose = require("mongoose")

let tweetSchema = new mongoose.Schema({
    content: {type: String, maxlength: 240 }, // max: 240 characters
    author: {type: String, required: true}
})


const Tweet = mongoose.model("Tweet", tweetSchema)


module.exports = Tweet