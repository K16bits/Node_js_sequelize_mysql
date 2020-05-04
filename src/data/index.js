const Sequelize = require('sequelize');
const dbconfig = require('./dbconfig');
const Pessoa = require("./models/Pessoa");
const connection = new Sequelize(dbconfig);

connection.authenticate().then(()=>{
    console.log("Deu certo :D")
}).catch(e=>{
    console.error("Deu errado :C",e);
})

Pessoa.init(connection); //MUito importante

// const Pessoas = connection.define("Pessoas",{  // Criando uma nova tabela
//     nome:{
//         type: Sequelize.STRING
//     },
//     email:{
//         type: Sequelize.STRING
//     },
//     senha:{
//         type: Sequelize.INTEGER
//     }
// })

// Pessoas.sync({force:true});


module.exports = {
    Sequelize: Sequelize,
    connection:connection,
}