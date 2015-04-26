/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schema_version', { 
    version_rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    installed_rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    script: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checksum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    installed_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    installed_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    execution_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
};
