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
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};