/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLUGINS', { 
    PLUGIN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PLUGIN_VERSION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PLUGIN_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PLUGIN_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PLUGIN_TYPE_VERSION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PLUGIN_LIBRARY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PLUGIN_LIBRARY_VERSION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PLUGIN_AUTHOR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PLUGIN_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    PLUGIN_LICENSE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LOAD_OPTION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
