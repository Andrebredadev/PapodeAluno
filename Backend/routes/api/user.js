const express = require('express')
var { Usuario, lista_usuarios } = require('../../models/user')
const router = express.Router()

router.get('/', (req, res, next) => {

    try {
        
        res.send(lista_usuarios)

    } catch(err) {
        console.error(err)
        res.status(500).send({"error" : "Server error"})

    }

})

router.post('/', (req, res, next) => {
    try {

        let { nome, email, senha } = req.body
        let usuario = new Usuario(id=0, nome=nome, email=email, senha=senha)
//! - Negação
        if(!email) {
            res.status(400).send({"error" : "Email requerido"})
        } else {
            if(!(email.includes('@') && email.includes('.'))){
                res.status(400).send({"error" : "Email invalido"})
            }

            usuario.id = lista_usuarios[lista_usuarios.length - 1].id +1
            lista_usuarios.push(usuario)
            res.send(lista_usuarios)
        }
    } catch(err) {
        console.error(err)
        res.status(500).send({"error" : "Server error"})
    }
})

router.get('/:userId', (req, res, next) => {
    try {

        let usuario = lista_usuarios.filter(usuario => usuario.id == req.params["userId"])

        if(usuario.length > 0){
            res.send(usuario[0])
        } else {
            res.status(400).send({"error" : "Usuario não existe"})
        }

    } catch (err) {
        console.error(err)
        res.status(500).send({"error" : "Server error"})

    }
})

module.exports = router