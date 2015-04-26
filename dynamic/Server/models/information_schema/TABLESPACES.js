/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TABLESPACES', { 
    TABLESPACE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ENGINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLESPACE_TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LOGFILE_GROUP_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EXTENT_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    AUTOEXTEND_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    MAXIMUM_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    NODEGROUP_ID: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    TABLESPACE_COMMENT: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
