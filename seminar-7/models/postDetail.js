module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PostDetail', {
        introducedPlace: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        openingHours: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        closedDays: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        notice: {
            type: DataTypes.TEXT(),
            allowNull: true,
        },
        postImageUrl: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};