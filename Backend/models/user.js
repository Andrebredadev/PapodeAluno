const router = require("../../../Pratica/BackEnd/routes/api/user")

class Usuario {
    constructor(id, nome, email, senha){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}

let lista_usuarios = []

lista_usuarios.push(new Usuario(1, 'Rick', 'rick@infnet.edu', '1234'))
lista_usuarios.push(new Usuario(2, 'Morty', 'morty@infnet.edu', '122232'))
lista_usuarios.push(new Usuario(3, 'Summer', 'summer@infnet.edu', 'abdced'))

module.exports = {Usuario, lista_usuarios}

