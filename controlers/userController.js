const tweetService = require("../services/tweetService")
const userService = require("../services/userService")
let userController = {}


userController.create = async (req, res) => {
    try {

        let { displayName, handler, email, password } = req.body
        let newUser = await userService.signUp(displayName, handler, email, password)
        res.json({
            message: "Usuário Criado!",
            payload: newUser
        })

    } catch (error) {
        console.log(error)
        res.status(422).json({
            message: "Erro na criação",
            payload: error.message
        })
    }
}


userController.getAll = async (req, res) => {
    try {
        let users = await userService.findAll()
        res.json({
            payload: users
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Erro na busca!",
            payload: error.message
        })
    }

}


userController.getById = async (req, res) => {

    try {
        let { userId } = req.params
        let user = await userService.findById(userId)
        res.json({
            message: "Usuário encontrado!",
            payload: user
        })
    } catch (error) {
        res.status(400).json({
            message: "Não foi possível encontrar o usuário!",
            payload: error.message
        })
    }
}


userController.getAllTweets = async (req, res) => {
    try {
        let { userId } = req.params
        let tweets = await tweetService.findByUserId(userId)
        res.json({
            payload: tweets
        })
    } catch (error) {
        res.status(400).json({
            message: "Erro Ao Buscar Tweets Do Usuário!",
            payload: error.message
        })
    }
}


userController.delete = async (req, res) => {

    try {
        let { userId } = req.params
        await userService.delete(userId)
        res.json({
            message: "Usuário Deletado!"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "Ocorreu um erro ao deletar o usuário!",
        })
    }
}


userController.update = async (req, res) => {

    try {
        let { userId } = req.params
        let { displayName, handler, email } = req.body
        let updatedUser = await userService.update(userId, displayName, handler, email)
        res.json({
            message: "Usuário Atualizado!",
            payload: updatedUser
        })
    } catch (error) {
        res.status(400).json({
            message: "Ocorreu Um Erro Ao Atualizar O Usuário!",
            payload: error.message
        })
    }

}

module.exports = userController