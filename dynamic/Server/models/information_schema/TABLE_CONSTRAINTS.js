/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TABLE_CONSTRAINTS', { 
    CONSTRAINT_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CONSTRAINT_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CONSTRAINT_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CONSTRAINT_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
