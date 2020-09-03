const Sequelize = require('sequelize');
const dbconfig = require('./dbconfig');
const Pessoa = require("./models/Pessoa");
const connection = new Sequelize(dbconfig);

connection.authenticate().then(()=>{
    console.log("Deu certo :D")
}).catch(e=>{
    console.error("Deu errado :C",e);
})

Pessoa.init(connection); //Conexão do Sequelize

// const Pessoas = connection.define("Pessoas",{  // Criando uma nova tabela, Se o nodemon estiver ativado só descomentar e comentar que irá ser criado
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

// Pessoas.sync({force:true}); //Forçar a sincronização no banco de dados


module.exports = {
    Sequelize: Sequelize,
    connection:connection,
}
