/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COLLATION_CHARACTER_SET_APPLICABILITY', { 
    COLLATION_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CHARACTER_SET_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
