# Node_js_sequelize_mysql
Implementando Node.js + Sequelize + Mysql. (Aprendendo as aplicações)

Ter no node_modules
    - express
     - mysql
     - mysql2
     - nodemon
     - sequelize
     - sequelize-cli
     
Para executar:
   npm run dev

Crie a database no xampp de nome test.

execute o codigo a seguir no arquivo index.js
 const Pessoas = connection.define("Pessoas",{  // Criando uma nova tabela
     nome:{
         type: Sequelize.STRING
     },
     email:{
         type: Sequelize.STRING
     },
     senha:{
         type: Sequelize.INTEGER
         }
 })

 Pessoas.sync({force:true}); Faz a sicronização da nova Tabela no mysql
