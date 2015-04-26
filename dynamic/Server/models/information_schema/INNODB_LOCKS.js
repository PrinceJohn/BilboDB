/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_LOCKS', { 
    lock_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lock_trx_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lock_mode: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lock_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lock_table: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    lock_index: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lock_space: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lock_page: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lock_rec: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    lock_data: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
