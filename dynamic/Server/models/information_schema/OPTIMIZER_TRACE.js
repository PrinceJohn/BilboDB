/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OPTIMIZER_TRACE', { 
    QUERY: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    TRACE: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    MISSING_BYTES_BEYOND_MAX_MEM_SIZE: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    INSUFFICIENT_PRIVILEGES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
