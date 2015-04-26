/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userrole', { 
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });
};
