/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_LOCK_WAITS', { 
    requesting_trx_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    requested_lock_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    blocking_trx_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    blocking_lock_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  });
};
