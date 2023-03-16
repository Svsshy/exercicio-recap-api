const express = require('express')
const router = express.Router()
const tweetRoute = require('./tweetRoute')
const userRoute = require('./userRoute')
const authRoute = require('./authRoute')

router.use(authRoute)
router.use(tweetRoute)
router.use(userRoute)

module.exports = router