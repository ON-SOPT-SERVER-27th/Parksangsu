const crypto = require('crypto');
const { User, Post } = require('../models');

module.exports = {
    emailCheck: async (email) => {
        try {
            const alreadyEmail = await User.findOne({
                where: {
                    email,
                }
            });
            return alreadyEmail;
        } catch (err) {
            throw err;
        }
    },
    signup: async (email, password, userName) => {
        try {
            const salt = crypto.randomBytes(64).toString('base64');
            const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
            const user = await User.create({
                email,
                password: hashedPassword,
                userName,
                salt,
            });
            return user;
        } catch (err) {
            throw err;
        }
    },
    signin: async (email, password, salt) => {
        try {
            const inputPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
            const user = await User.findOne({
                where : {
                    email,
                    password: inputPassword
                }
            });
            return user;
        } catch (err) {
            throw err;
        }
    },
    userFindAll: async () => {
        try {
            const findAllUser = await User.findAll({
                attributes: ['id', 'email', 'userName']
            })
            return findAllUser;
        } catch (err) {
            throw err;
        }
    },
    userIdCheck: async (id) => {
        try {
            const findByIdUser = await User.findOne({
                where: {
                    id
                }
            })
            return findByIdUser;
        } catch (err) {
            throw err;
        }
    },
    userIdDelete: async (id) => {
        try {
            const deleteByIdUser = await User.destroy({
                where: {
                    id
                }
            })
            return deleteByIdUser
        } catch (err) {
            throw err;
        }
    },
    userUpdate: async (id, email, password, userName) => {
        try {
            const salt = crypto.randomBytes(64).toString("base64");
            const checkCryptoedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
            const updateUser = await User.update({
                email,
                password: checkCryptoedPassword,
                userName,
                salt
            },
            {
                where: {
                    id
                }
            })
            return updateUser;
        } catch (err) {
            throw err;
        }
    }
}


