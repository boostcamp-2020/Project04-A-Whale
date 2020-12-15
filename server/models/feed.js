module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'feed',
    {
      no: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'feed',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
};
