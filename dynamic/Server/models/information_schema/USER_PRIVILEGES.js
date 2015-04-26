/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER_PRIVILEGES', { 
    GRANTEE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    TABLE_CATALOG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    PRIVILEGE_TYPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    IS_GRANTABLE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
