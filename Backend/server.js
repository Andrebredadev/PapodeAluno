const express = require('express')
var bodyParse = require('body-parser')
const app = express()
const PORT = 3000

// Iniciar o Middleware BodyParse
app.use(express.json())
app.use(bodyParse.urlencoded({extend:true}))
app.use(bodyParse.json())

//Criar as rotas
app.use('/user', require('./routes/api/user'))


app.listen(PORT, () => (console.log(`Esta rodando em htpp://localhost:${PORT}`)))