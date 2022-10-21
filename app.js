const db = require('./src/DB/connection')
const express = require("express");
const app = express();
const router = require('./src/routers/router');

app.use(express.json());

app.use(router);

app.listen(8080, function(req, res){
    console.log("Servidor rodando porta 8080");
    db.connect().then(()=>{
        console.log("Banco conectado")
    }).catch((err)=>{
        console.log("Erro de conexao"+err)
    })
});


