const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* Post */
db.Post = require('./post')(sequelize, Sequelize);
db.PostDetail = require('./post/:postId')(sequelize, Sequelize);
db.Facilities = require('./post/:postId/facilities')(sequelize, Sequelize);
db.PostDetailSelect = require('./post/:postId/detail')(sequelize, Sequelize);
db.Hashtag = require('./post/:postId/hashtag')(sequelize, Sequelize);

/* Banner */
db.Banner = require('./banner')(sequelize, Sequelize);


/** 1 : 1   Post : PostDetail */
db.Post.hasOne(db.PostDetail, { onDelete: 'cascade' });
db.PostDetail.belongsTo(db.Post);

/** 1 : 1   Post : PostDetailSelect */
db.Post.hasOne(db.PostDetailSelect, { onDelete: 'cascade' });
db.PostDetailSelect.belongsTo(db.Post);

/** 1 : N   Post : Facilities */
db.Post.hasMany(db.Facilities, { onDelete: 'cascade' });
db.Post.belongsTo(db.Post);

/** 1 : N   Post : Hashtag */
db.Post.hasMany(db.Hashtag, { onDelete: 'cascade' });
db.Hashtag.belongsTo(db.Post);


module.exports = db;
