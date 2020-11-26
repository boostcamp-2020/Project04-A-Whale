module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'follow',
    {
      no: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      tableName: 'follow',
      timestamps: true,
      underscored: true,
    }
  );
};
