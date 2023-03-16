const userService = require("./userService")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authService = {}


authService.validate = async (email, password) => {
    let currentUser = await userService.findByEmail(email)   
    const validPassword = bcrypt.compareSync(password, currentUser.password)
    if(!validPassword) throw new Error("Login Não Autorizado!")
    const token = jwt.sign({ 
        email
     }, process.env.JWT_SECRET, { 
        expiresIn: "7d"
      })
    return token
}



module.exports = authService