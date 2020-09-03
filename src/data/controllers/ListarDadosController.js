const Pessoa = require("../models/Pessoa");


module.exports = {
    async Listar(req,res){
        // Find all users
        const x = await Pessoa.findAll({attributes:['nome','senha']});    
        res.json(x);   
    }
}
