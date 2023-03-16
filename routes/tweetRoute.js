const express = require("express")
const tweetRoute = express.Router()
const tweetController = require("../controlers/tweetController")



tweetRoute
    .post("/tweet", tweetController.createTweet)
    .get("/tweet", tweetController.getTweetById)
    .delete("/tweet/:tweetId", tweetController.deleteTweet)


module.exports = tweetRoute
