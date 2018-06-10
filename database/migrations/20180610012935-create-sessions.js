
module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Sessions', {
      sid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      expires: DataTypes.DATE,
      data: DataTypes.TEXT,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, // Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE, // Sequelize.INTEGER
      },
    })
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Sessions');
  },
};
