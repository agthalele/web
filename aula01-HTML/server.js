'use strict';

module.exports = require('./server.node');
// importa o express
const express = require('express')
// instancia o express e atribui a "app"
const app = express()
// possibilita que express reconheça objetos request
// como strings ou arrays -> req.body
// urlenconded é formato padrão do formulário recebido
app.use(express.urlencoded({extended: true}));
// inidica que o server vai atender uma requisição POST
// para URL "/alunos"
app.post('/enviado', (req, resp) => {
console.log(req.body)
resp.send('<h1><b>!Obrigada pelo Contato!</b></h1>')
})
    console.log('Servidor Executando...')
    // coloca a aplicação para ouvir a porta 3000
    app.listen(3000)
    