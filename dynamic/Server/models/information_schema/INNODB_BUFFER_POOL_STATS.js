/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INNODB_BUFFER_POOL_STATS', { 
    POOL_ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    POOL_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    FREE_BUFFERS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    DATABASE_PAGES: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    OLD_DATABASE_PAGES: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    MODIFIED_DATABASE_PAGES: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PENDING_DECOMPRESS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PENDING_READS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PENDING_FLUSH_LRU: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PENDING_FLUSH_LIST: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_MADE_YOUNG: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_NOT_MADE_YOUNG: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_MADE_YOUNG_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_MADE_NOT_YOUNG_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_PAGES_READ: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_PAGES_CREATED: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_PAGES_WRITTEN: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_READ_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_CREATE_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    PAGES_WRITTEN_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_PAGES_GET: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    HIT_RATE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    YOUNG_MAKE_PER_THOUSAND_GETS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NOT_YOUNG_MAKE_PER_THOUSAND_GETS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_PAGES_READ_AHEAD: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    NUMBER_READ_AHEAD_EVICTED: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    READ_AHEAD_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    READ_AHEAD_EVICTED_RATE: {
      type: 'DOUBLE',
      allowNull: false,
      defaultValue: '0'
    },
    LRU_IO_TOTAL: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    LRU_IO_CURRENT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    UNCOMPRESS_TOTAL: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    UNCOMPRESS_CURRENT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
