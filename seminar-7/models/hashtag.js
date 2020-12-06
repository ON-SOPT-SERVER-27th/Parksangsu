// const { ExerciseVideo } = require('./index');

// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('HASHTAG_TB', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         videoId: {
//             type: DataTypes.INTEGER,
//             reference: {
//                 model: ExerciseVideo,
//                 key: 'id',
//             }
//         },
//         tag: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         timestamps: true
//     })
// }