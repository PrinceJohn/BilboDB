/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endpoint', { 
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_available_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_unavailable_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endpoint_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: 'BIT(1)',
      allowNull: false,
    },
    enabled: {
      type: 'BIT(1)',
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  });
};
