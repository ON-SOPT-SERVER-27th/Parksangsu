module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Banner', {
        bannerImageUrl: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};