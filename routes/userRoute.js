const express = require("express")
const userRoute = express.Router()
const userController = require("../controlers/userController")



userRoute 
    .post("/user", userController.create)
    .get("/user", userController.getAll)
    .get("/user/:userId", userController.getById)
    .get("/user/:userId/tweets", userController.getAllTweets)
    .put("/user/:userId", userController.update)
    .delete("/user/:userId", userController.delete)



module.exports = userRoute
