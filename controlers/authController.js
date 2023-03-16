const authService = require("../services/authService")
const authController = {}


authController.login = async (req, res) =>{

    try {
        let { email, password } = req.body
        let currentSession = await authService.validate(email, password)
        return res.json({
            message: "Login Realizado!",
            payload: currentSession
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Ocorreu um erro!",
            payload: error.message
        })
    }
}

module.exports = authController