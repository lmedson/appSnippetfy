module.exports = {
  up: (queryInterface, DataTypes) => { //o que será feito quando a migration for executada
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER, // Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING, // Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING, // Sequelize.INTEGER
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING, // Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, // Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE, // Sequelize.INTEGER
      },
    });
  },

  down: (queryInterface, DataTypes) => { // o que vai mudar, caso precise dar um rollback na migration
    queryInterface.dropTable('Users');
  },
};
