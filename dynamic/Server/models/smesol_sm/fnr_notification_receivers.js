/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fnr_notification_receivers', { 
    fnrid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });
};
