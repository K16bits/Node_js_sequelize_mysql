const Pessoa = require("../models/Pessoa");


module.exports = {
    async Listar(req,res){
        // Find all users
        const x = await Pessoa.findAll({attributes:['nome','senha']});  //THIS IS IMPORTE CARAI ({raw:true})
        
        res.json(x);   
    }
}
