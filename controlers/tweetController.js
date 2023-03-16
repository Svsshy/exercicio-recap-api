const tweetService = require("../services/tweetService")
let tweetController = {}




tweetController.createTweet = async (req, res) => {
    
    try {
        let { content, author } = req.body
        let tweet = await tweetService.create( content, author )
        res.json({
            message: "Tweet Criado!",
            payload: tweet
        })
    } catch (error) {
        res.status(400).json({
            message: "Erro Ao Criar Tweet!",
            payload: error.message
        })
    }
}



tweetController.getTweetById = async (req, res) => {
    try {
        let { tweetId } = req.params
        if(tweetId === undefined) return res.status(400).json({message: "Tweet not found"})
        let tweet  = await tweetService.findById(tweetId)
        res.json({
            message: "Tweet Encontrado!",
            payload: tweet
        })
    } catch (error) {
        res.status(400).json({
            message:"Ocorreu Um Erro Ao Procurar O Tweet!",
            payload: error.message
        })
        
    }
}

tweetController.deleteTweet = async (req, res) => {
    try {
        let { tweetId } = req.params
        if(tweetId === undefined) return res.status(400).json({message: "Tweet not found"})
        await tweetService.delete(tweetId)
        res.json({
            message:"Tweet Deletado!"
        })
    } catch (error) {
        res.status(400).json({
            message:"Ocorreu Um Erro Ao Deletar O Tweet!",
            payload: error.message
        })
    }
}

module.exports = tweetController