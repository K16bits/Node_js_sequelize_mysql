# Node_js_sequelize_mysql
Implementando Node.js + Sequelize + Mysql. (Aprendendo as aplicações) <br/>

Obs: XAMPP Tem que ter uma database chamada de test e XAMPP rodando no localhost.<br>

- Instalando as dependencies<br>
npm install<br>

- Rodar o servidor no  localhost:3333 <br>
npm run dev<br>

- Ir na pasta ./src/data descomentar e comentar uma parte do script para criar a table (Pessoas) no arquivo index.js (Lá tem o passo a passo comentado) <br>

- Envie dados ou liste dados do Banco de Dados usando o Insomnia<br>
localhost:3333/add -> Para enviar, método POST obs:Tem que ser em Json <br>
 Exemplo: <br>
  {<br>
    "nome":"teste",<br>
    "email":"senha",<br>
    "senha":"123"<br>
  }<br>

localhost:3333/see-> Para Listar os Dados, método GET

