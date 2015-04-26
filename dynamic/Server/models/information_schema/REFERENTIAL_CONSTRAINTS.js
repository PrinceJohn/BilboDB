/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('REFERENTIAL_CONSTRAINTS', { 
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
    UNIQUE_CONSTRAINT_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    UNIQUE_CONSTRAINT_SCHEMA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    UNIQUE_CONSTRAINT_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MATCH_OPTION: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    UPDATE_RULE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    DELETE_RULE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    REFERENCED_TABLE_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
