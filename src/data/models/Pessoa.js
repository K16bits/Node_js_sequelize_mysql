const {Model,DataTypes} = require("sequelize");

class Pessoa extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.INTEGER,
        },{
            sequelize 
        })
    }
}

module.exports = Pessoa;
