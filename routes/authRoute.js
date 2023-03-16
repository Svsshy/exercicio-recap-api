const express = require("express")
const authRoute = express.Router()
const authController = require("../controlers/authController")



authRoute
    .post("/auth/login", authController.login)


module.exports = authRoute