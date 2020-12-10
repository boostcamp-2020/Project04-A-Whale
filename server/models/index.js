const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델정의
db.User = require('./user')(sequelize, Sequelize);
db.Bucket = require('./bucket')(sequelize, Sequelize);
db.Detail = require('./detail')(sequelize, Sequelize);
db.Achieve = require('./achieve')(sequelize, Sequelize);
db.Follow = require('./follow')(sequelize, Sequelize);
db.Feed = require('./feed')(sequelize, Sequelize);

// 관계정의 user : bucket = 1 : N
db.User.hasMany(db.Bucket, {
  foreignKey: { allowNull: false },
});
db.Bucket.belongsTo(db.User, {
  foreignKey: { allowNull: false },
});

// 관계정의 user : feed = 1 : N
db.User.hasMany(db.Feed, {
  foreignKey: { allowNull: false },
});
db.Feed.belongsTo(db.User, {
  foreignKey: { allowNull: false },
});

// 관계정의 bucket : detail = 1 : N
db.Bucket.hasMany(db.Detail, {
  foreignKey: { allowNull: false },
});
db.Detail.belongsTo(db.Bucket, {
  foreignKey: { allowNull: false },
});

// 관계정의 bucket : acheive = 1 : 1
db.Bucket.hasOne(db.Achieve, {
  foreignKey: { allowNull: false },
});
db.Achieve.belongsTo(db.Bucket, {
  foreignKey: { allowNull: false },
});

// 관계정의 user : follow = M : N
db.User.belongsToMany(db.User, { as: 'following', foreignKey: 'following_no', through: db.Follow });
db.User.belongsToMany(db.User, { as: 'followed', foreignKey: 'followed_no', through: db.Follow });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
