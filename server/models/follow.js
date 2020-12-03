module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'follow',
    {
      no: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: true,
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
