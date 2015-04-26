/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_CMP_PER_INDEX_RESET', { 
    database_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    table_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    index_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    compress_ops: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    compress_ops_ok: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    compress_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    uncompress_ops: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    uncompress_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  });
};
