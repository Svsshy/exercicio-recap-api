const User = require("../models/userModel")
const bcrypt = require("bcrypt")
let userService = {}


userService.signUp = async (displayName, handler, email, password) => {
    const  currentUser = await User.findOne({ "email": email })
    if(currentUser) throw new Error("E-mail já cadastrado!")
    const hashedPassword = bcrypt.hashSync(password, 10)
    return await User.create({ displayName, handler, email, password: hashedPassword })
}


userService.findByEmail = async (email) => {
    const  currentUser = await User.findOne({ "email": email })
    if(!currentUser) throw new Error("Usuário não encontrado!")
    return currentUser
}
userService.findById = async (userId) => {
    let user = await User.findById({ _id: userId })
    if(!user) throw new Error("Usuário não encontrado!")
    return user
}

userService.findAll = async () => {
    return await User.find({})
}

userService.update = async (userId, displayName, handler, email, password) => {
    return await User.updateOne({ _id: userId }, { displayName, handler, email, password })
}

userService.delete = async (userId) => {
    let { deletedCount } = await User.deleteOne({ _id: userId })
    if (!deletedCount) throw new Error("Usuário não encontrado!")
    return
}

module.exports = userService