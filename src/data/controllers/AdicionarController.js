const Pessoa = require("../models/Pessoa");


module.exports = {
    async store(req,res){
        const {nome, email, senha} = req.body;
        
        const pessoa = await Pessoa.create({nome,email,senha})
        return res.json(pessoa);
    }
}