/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROCESSLIST', { 
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    HOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DB: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    COMMAND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TIME: {
      type: DataTypes.INTEGER(7),
      allowNull: false,
      defaultValue: '0'
    },
    STATE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    INFO: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
