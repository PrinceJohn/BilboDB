/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COLLATIONS', { 
    COLLATION_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    CHARACTER_SET_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    IS_DEFAULT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IS_COMPILED: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    SORTLEN: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
