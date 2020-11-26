module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'bucket',
    {
      no: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      bucketStatus: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        comment: "'O':open, 'A':achieve, 'G':give up",
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      refCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      tableName: 'bucket',
      timestamps: true,
      underscored: true,
    }
  );
};
