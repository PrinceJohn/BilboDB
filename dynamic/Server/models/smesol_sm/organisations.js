/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organisations', { 
    Id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    ParentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShouldValue: {
      type: DataTypes.DECIMAL(11,10),
      allowNull: true,
    },
    Timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
