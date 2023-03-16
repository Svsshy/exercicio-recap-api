const Tweet = require("../models/tweetModel")


let tweetService = {}

tweetService.create = (content, author) => {
    return Tweet.create({ content, author })
}

tweetService.findById = (tweetId) => {
    return Tweet.findById({ _id: tweetId })
}

tweetService.findByUserId = (userId) => {
    return Tweet.find({author: userId})
}

tweetService.delete = (tweetId) => {
    return Tweet.deleteOne({ _id: tweetId })
}


module.exports = tweetService