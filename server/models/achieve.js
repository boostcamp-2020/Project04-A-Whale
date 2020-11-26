module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'achieve',
    {
      no: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'achieve',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
};
