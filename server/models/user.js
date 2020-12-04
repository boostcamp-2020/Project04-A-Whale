module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      no: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      profileUrl: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      rank: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: 'user',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
};
