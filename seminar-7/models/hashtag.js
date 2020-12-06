module.exports = (sequelize, DataTypes) => {
    return sequelize.define('HASHTAG_TB', {
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
}