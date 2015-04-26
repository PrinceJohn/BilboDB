/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_attendant', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    prompt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
};
