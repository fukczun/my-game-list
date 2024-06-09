//  Require das dependências de game.

const {Sequelize, DataTypes} = require ("sequelize")
const sequelize = new Sequelize("mysql://root:56146458iago@localhost/mygamelistbd")

//  Definindo o modelo Game com os métodos para interagir com o banco de dados.

const Game = sequelize.define("Game", {
    idGame: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gameName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    sinopse: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lancamento: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "1000-01-01"
    },
    plataformas: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'jogo',  //    Nome da tabela no banco de dados.
    timestamps: false   //    Se não estiver usando campos de timestamps como createdAt e updatedAt.
  });

module.exports = Game   //  Exportando o modelo.