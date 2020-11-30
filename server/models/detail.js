module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'detail',
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
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        comment: "'O':open, 'A':achieve,",
      },
    },
    {
      tableName: 'detail',
      timestamps: true,
      paranoid: true,
      underscored: true,
    }
  );
};
