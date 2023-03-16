let express = require("express")
let mongoose = require("mongoose")
let dotenv = require("dotenv")
let router = require("./routes/index")
let cors = require("cors")

let app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(router)

let PORT = 3030


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✨ Conectado ao banco de dados Atlas')
  }).catch(error => console.error(error))

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta  ${PORT}`)
})