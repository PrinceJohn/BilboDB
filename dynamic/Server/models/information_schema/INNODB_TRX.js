/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_TRX', { 
    trx_id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    trx_state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    trx_started: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    trx_requested_lock_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trx_wait_started: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    trx_weight: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_mysql_thread_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_query: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trx_operation_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trx_tables_in_use: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_tables_locked: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_lock_structs: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_lock_memory_bytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_rows_locked: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_rows_modified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_concurrency_tickets: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_isolation_level: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    trx_unique_checks: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    trx_foreign_key_checks: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    trx_last_foreign_key_error: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trx_adaptive_hash_latched: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    trx_adaptive_hash_timeout: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    trx_is_read_only: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    trx_autocommit_non_locking: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
