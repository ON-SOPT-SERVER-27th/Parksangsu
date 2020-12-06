module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT(),
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT(),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        postImageUrl: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};