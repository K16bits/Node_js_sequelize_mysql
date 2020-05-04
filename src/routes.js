const express = require('express');
const routes = express.Router();

const AdicionarController = require("./data/controllers/AdicionarController");

const ListarDados = require("./data/controllers/ListarDadosController.js"); //teste
const Pessoa = require("./data/models/Pessoa")

routes.get("/",(req,res)=>{
    res.json({"hello":"world"});
})

routes.post("/add",AdicionarController.store); //Test

routes.get("/see",ListarDados.Listar);

module.exports = routes;